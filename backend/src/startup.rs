use crate::routes::{create_note, health_check};
use actix_web::dev::{self, Server};
use actix_web::{web, App, HttpResponse, HttpServer};
use sqlx::PgConnection;
use std::net::TcpListener;

pub fn run(listener: TcpListener, connection: PgConnection) -> Result<Server, std::io::Error> {
    let connection = web::Data::new(connection);
    let server = HttpServer::new(move || {
        App::new()
            .route("/health_check", web::get().to(health_check))
            .route("/notes", web::post().to(create_note))
            .app_data(connection.clone())
    })
    .listen(listener)?
    .run();
    Ok(server)
}
