use backend::configuration::get_configuration;
use backend::startup::build;
use backend::telemetry::{get_subscriber, init_subscriber};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    //tracing
    let subscriber = get_subscriber("backend".into(), "info".into(), std::io::stdout);
    init_subscriber(subscriber);
    //configuration
    let configuration = get_configuration().expect("Failed to read configuration.");
    let server = build(configuration).await?;
    server.await?;
    Ok(())
}
