use crate::helpers::spawn_app;
use backend::routes::Notes;
use serde_json::json;

use uuid::Uuid;

#[actix_rt::test]
async fn create_note_returns_a_200_for_valid_data() {
    // Arrange
    let app = spawn_app().await;
    let body = json!({
        "title": "Test Note",
        "content": "test note content",
        "tag": "test",
    })
    .to_string();

    // Act
    let response = app.post_notes(body.into()).await;

    // Assert
    assert_eq!(200, response.status().as_u16());

    let saved = sqlx::query!("SELECT title, content, tag FROM notes ")
        .fetch_one(&app.db_pool)
        .await
        .expect("Failed to fetch saved subscription.");
    assert_eq!(saved.title, "Test Note");
    assert_eq!(saved.content.unwrap(), "test note content");
    assert_eq!(saved.tag.unwrap(), "test");
}

#[actix_rt::test]
async fn create_note_returns_a_400_when_data_is_missing() {
    // Arrange
    let note_body_empty = json!({}).to_string();

    let note_body_missing_title = json!({
        "content": "test note content",
        "tag": "test",
    })
    .to_string();

    let app = spawn_app().await;
    let test_cases = vec![
        (note_body_empty, "note body is empty"),
        (note_body_missing_title, "missing the title"),
    ];

    for (invalid_body, error_message) in test_cases {
        // Act
        let response = app.post_notes(invalid_body.into()).await;

        // Assert
        assert_eq!(
            400,
            response.status().as_u16(),
            "The API did not fail with 400 Bad Request when the payload was {}.",
            error_message
        )
    }
}

#[actix_rt::test]
async fn get_notes_returns_notes_list() {
    // Arrange
    let app = spawn_app().await;
    // TODO generate random valid notes
    let body1 = json!({
        "title": "Test Note 1",
        "content": "test note content 1",
        "tag": "test 1",
    })
    .to_string();
    let body2 = json!({
        "title": "Test Note 2",
        "content": "test note content 2",
        "tag": "test 2",
    })
    .to_string();

    app.post_notes(body1.into()).await;
    app.post_notes(body2.into()).await;

    // Act
    let response = app.get_notes().await;
    assert_eq!(200, response.status().as_u16());

    let notes: Notes = response
        .json()
        .await
        .expect("Failed to deserialize the Json response.");
    // Assert
    // TODO change to check entire json object
    assert_eq!("Test Note 1", &notes[0].title);
    assert_eq!("Test Note 2", &notes[1].title);
}

#[actix_rt::test]
async fn delete_note_deletes_note_from_database() {
    // Arrange
    let app = spawn_app().await;
    let id = Uuid::new_v4();
    // TODO replace with automatically generated note body
    // Add note
    let body = json!({
        "title": "Test Note",
        "content": "test note content",
        "tag": "test",
    })
    .to_string();
    app.post_notes(body.into()).await;

    let notes: Notes = app
        .get_notes()
        .await
        .json()
        .await
        .expect("Failed to deserialize the Json response.");
    let note = &notes[0];

    assert_eq!(&note.title, "Test Note");

    // Act
    let response = app
        .delete_notes(serde_json::to_string(&note.id).unwrap())
        .await;
    assert_eq!(200, response.status().as_u16());

    // Assert
    let note_request = sqlx::query!(
        r#"
        SELECT * FROM notes WHERE id = $1
        "#,
        id,
    )
    .fetch_one(&app.db_pool)
    .await;
    //.expect("Failed to fetch saved note.");
    assert!(matches!(note_request, Err(sqlx::Error::RowNotFound)));
}

#[actix_rt::test]
async fn edit_note_modifies_existing_note_in_database() {
    // Arrange
    let app = spawn_app().await;

    // Add note to the database
    let body = json!({
        "title": "Test Note",
        "content": "test note content",
        "tag": "test",
    })
    .to_string();
    // Get added note
    app.post_notes(body.into()).await;
    let notes: Notes = app
        .get_notes()
        .await
        .json()
        .await
        .expect("Failed to deserialize the Json response.");
    let note = &notes[0];

    assert_eq!(&note.title, "Test Note");

    // Act
    // Modify note
    let body = json!({
        "id": note.id,
        "title": "Modified Test Note",
        "content": "modified test note content",
        "tag": "modified test",
        "is_archived": true,
    })
    .to_string();

    let response = app.put_notes(body).await;
    // Assert
    assert_eq!(200, response.status().as_u16());
    let saved = sqlx::query!("SELECT title, content, tag, is_archived FROM notes ")
        .fetch_one(&app.db_pool)
        .await
        .expect("Failed to fetch saved subscription.");
    assert_eq!(saved.title, "Modified Test Note");
    assert_eq!(saved.content.unwrap(), "modified test note content");
    assert_eq!(saved.tag.unwrap(), "modified test");
    assert_eq!(saved.is_archived, true);
}
