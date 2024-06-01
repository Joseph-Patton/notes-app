use actix_web::{web, HttpResponse};
use chrono::Utc;
use sqlx::PgPool;
use uuid::Uuid;
#[derive(serde::Deserialize, Debug)]
pub struct Note {
    id: u64,
    title: String,
    content: String,
    tag: String,
}

pub async fn create_note(note: web::Json<Note>, pool: web::Data<PgPool>) -> HttpResponse {
    sqlx::query!(
        r#"
        INSERT INTO notes (id, title, content, tag, created_at)
        VALUES ($1, $2, $3, $4, $5)
        "#,
        Uuid::new_v4(),
        note.title,
        note.content,
        note.tag,
        Utc::now()
    )
    .execute(pool.get_ref())
    .await;
    HttpResponse::Ok().finish()
}
