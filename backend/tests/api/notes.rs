use crate::helpers::spawn_app;
use serde_json::json;

#[actix_rt::test]
async fn create_note_returns_a_200_for_valid_data() {
    // Arrange
    let app = spawn_app().await;
    let client = reqwest::Client::new();
    let body = json!({
        "title": "Test Note",
        "content": "test note content",
        "tag": "test",
    })
    .to_string();

    // Act
    let response = client
        .post(&format!("{}/notes", &app.address))
        .header("Content-Type", "application/json")
        .body(body)
        .send()
        .await
        .expect("Failed to execute request.");

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
    // TODO: systematic way to generate failing test cases
    let note_body_empty = json!({}).to_string();

    let note_body_missing_title = json!({
        "content": "test note content",
        "tag": "test",
    })
    .to_string();

    let app = spawn_app().await;
    let client = reqwest::Client::new();
    let test_cases = vec![
        (note_body_empty, "note body is empty"),
        (note_body_missing_title, "missing the title"),
    ];

    for (invalid_body, error_message) in test_cases {
        // Act
        let response = client
            .post(&format!("{}/notes", &app.address))
            .header("Content-Type", "application/json")
            .body(invalid_body)
            .send()
            .await
            .expect("Failed to execute request.");

        // Assert
        assert_eq!(
            400,
            response.status().as_u16(),
            "The API did not fail with 400 Bad Request when the payload was {}.",
            error_message
        )
    }
}
