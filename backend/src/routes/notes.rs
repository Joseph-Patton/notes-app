use actix_web::{web, HttpResponse};

#[derive(serde::Deserialize, Debug)]
pub struct Note {
    id: u64,
    title: String,
    content: String,
    tag: String,
}
pub async fn create_note(_note: web::Json<Note>) -> HttpResponse {
    HttpResponse::Ok().finish()
}

// pub async fn create_note(
//     _note: web::Json<Note>,
//     _connection: web::Data<PgConnection>,
// ) -> HttpResponse {
//     sqlx::query!(
//         r#"
//         INSERT INTO notes (id, title, content, tag, created_at)
//         VALUES ($1, $2, $3, $4)
//         "#
//         Uuid:new_v4,

//     )
// }
