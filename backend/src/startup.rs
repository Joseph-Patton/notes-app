use crate::routes::{create_note, health_check};
use actix_web::dev::{self, Server};
use actix_web::{web, App, HttpResponse, HttpServer};
use std::net::TcpListener;

pub fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
    let server = HttpServer::new(|| {
        App::new()
            .route("/health_check", web::get().to(health_check))
            .route("/notes", web::post().to(create_note))
    })
    .listen(listener)?
    .run();
    Ok(server)
}
