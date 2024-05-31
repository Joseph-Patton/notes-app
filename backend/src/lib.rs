//! lib.rs
use actix_web::dev::{self, Server};
use actix_web::{web, App, HttpResponse, HttpServer};
use std::net::TcpListener;

async fn health_check() -> HttpResponse {
    HttpResponse::Ok().finish()
}

#[derive(serde::Deserialize, Debug)]
struct Note {
    id: u64,
    title: String,
    content: String,
    tag: String,
}
async fn create_note(note: web::Json<Note>) -> HttpResponse {
    //println!("note.title: {}", note.title);
    HttpResponse::Ok().finish()
}

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
