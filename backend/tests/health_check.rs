use actix_rt;

#[actix_rt::test]
async fn health_check_works() {
    // Arrange
    spawn_app().await.expect("Failed to spawn app");
    let client = reqwest::Client::new();

    // Act
    let response = client
        .get("http://127.0.0.1:8000/health_check")
        .send()
        .await
        .expect("Failed to execute request.");

    // Assert
    assert!(response.status().is_success());
    assert_eq!(Some(0), response.content_length());
}
async fn spawn_app() -> std::io::Result<()> {
    backend::run().await
}
