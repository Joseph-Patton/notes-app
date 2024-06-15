use crate::helpers::spawn_app;
use backend::routes::Notes;
use serde_json::json;

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
    let response = app.post_note(body.into()).await;

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
        let response = app.post_note(invalid_body.into()).await;

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

    app.post_note(body1.into()).await;
    app.post_note(body2.into()).await;

    let response = app.get_notes().await;
    assert_eq!(200, response.status().as_u16());
    // Act
    let notes: Notes = response
        .json()
        .await
        .expect("Failed to deserialize the Json response.");
    // Assert
    // println!(
    //     "This is the payload: {}",
    //     result.text().await.expect("failed to get payload")
    // );
    // TODO change to check entire json object
    assert_eq!("Test Note 1", notes[0].title);
}
