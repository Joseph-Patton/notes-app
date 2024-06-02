use actix_web::{web, HttpResponse};
use chrono::Utc;
use sqlx::PgPool;
use uuid::Uuid;
#[derive(serde::Deserialize, Debug)]
pub struct Note {
    title: String,
    content: String,
    tag: String,
}

pub async fn create_note(note: web::Json<Note>, pool: web::Data<PgPool>) -> HttpResponse {
    let request_id = Uuid::new_v4();
    tracing::info!(
        "request_id{} - Adding a new note '{}'.",
        request_id,
        note.title, //remove this after testing, user notes should not be logged
    );
    match sqlx::query!(
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
    .await
    {
        Ok(_) => {
            tracing::info!("request_id {} - New note have been created", request_id);
            HttpResponse::Ok().finish()
        }
        Err(e) => {
            tracing::error!(
                "request_id {} - Failed to execute query: {:?}",
                request_id,
                e
            );
            HttpResponse::InternalServerError().finish()
        }
    }
}
