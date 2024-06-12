use crate::routes::{create_note, health_check};
use actix_cors::Cors;
use actix_web::dev::Server;
use actix_web::{web, App, HttpServer};
use sqlx::PgPool;
use std::net::TcpListener;
use tracing_actix_web::TracingLogger;

pub fn run(listener: TcpListener, db_pool: PgPool) -> Result<Server, std::io::Error> {
    let db_pool = web::Data::new(db_pool);
    let server = HttpServer::new(move || {
        App::new()
            // TODO change cors for production
            .wrap(Cors::permissive())
            .wrap(TracingLogger::default())
            .route("/health_check", web::get().to(health_check))
            .route("/notes", web::post().to(create_note))
            .app_data(db_pool.clone())
    })
    .listen(listener)?
    .run();
    Ok(server)
}
