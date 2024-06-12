use backend::configuration::get_configuration;
use backend::startup::Application;
use backend::telemetry::{get_subscriber, init_subscriber};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // tracing
    let subscriber = get_subscriber("backend".into(), "info".into(), std::io::stdout);
    init_subscriber(subscriber);
    // configuration
    let configuration = get_configuration().expect("Failed to read configuration.");
    // application
    let application = Application::build(configuration).await?;
    application.run_until_stopped().await?;
    Ok(())
}
