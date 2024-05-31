use actix_web::{web, HttpResponse};

#[derive(serde::Deserialize, Debug)]
pub struct Note {
    id: u64,
    title: String,
    content: String,
    tag: String,
}
pub async fn create_note(_note: web::Json<Note>) -> HttpResponse {
    //println!("note.title: {}", note.title);
    HttpResponse::Ok().finish()
}
