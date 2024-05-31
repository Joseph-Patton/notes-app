use serde_json::json;
use std::net::TcpListener;

#[actix_rt::test]
async fn health_check_works() {
    // Arrange
    let address = spawn_app();
    let client = reqwest::Client::new();

    // Act
    let response = client
        .get(&format!("{}/health_check", &address))
        .send()
        .await
        .expect("Failed to execute request.");

    // Assert
    assert!(response.status().is_success());
    assert_eq!(Some(0), response.content_length());
}

fn spawn_app() -> String {
    let listener = TcpListener::bind("127.0.0.1:0").expect("Failed to bind random port");
    // We retrieve the port assigned to us by the OS
    let port = listener.local_addr().unwrap().port();
    let server = backend::startup::run(listener).expect("Failed to bind address");
    let _ = tokio::spawn(server);
    // We return the application address to the caller!
    format!("http://127.0.0.1:{}", port)
}

#[actix_rt::test]
async fn create_note_returns_a_200_for_valid_data() {
    // Arrange
    let app_address = spawn_app();
    let client = reqwest::Client::new();
    let body = json!({
        "id": 1,
        "title": "Test Note",
        "content": "test note content",
        "tag": "test",
    })
    .to_string();

    // Act
    let response = client
        .post(&format!("{}/notes", &app_address))
        .header("Content-Type", "application/json")
        .body(body)
        .send()
        .await
        .expect("Failed to execute request.");

    // Assert
    assert_eq!(200, response.status().as_u16());
}

#[actix_rt::test]
async fn create_note_returns_a_400_when_data_is_missing() {
    // Arrange
    // TODO: systematic way to generate failing test cases
    let note_body_missing_id = json!({
        "title": "Test Note",
        "content": "test note content",
        "tag": "test",
    })
    .to_string();

    let note_body_missing_title = json!({
        "id": 1,
        "content": "test note content",
        "tag": "test",
    })
    .to_string();

    let app_address = spawn_app();
    let client = reqwest::Client::new();
    let test_cases = vec![
        (note_body_missing_id, "missing the id"),
        (note_body_missing_title, "missing the title"),
    ];

    for (invalid_body, error_message) in test_cases {
        // Act
        let response = client
            .post(&format!("{}/notes", &app_address))
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
