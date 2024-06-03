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

//web logic
#[tracing::instrument(
name = "Adding a new note",
skip(note, pool),
fields(
note_title = %note.title // TODO remove eventually so that user notes are not logged, keep for testing
)
)]
pub async fn create_note(note: web::Json<Note>, pool: web::Data<PgPool>) -> HttpResponse {
    match insert_note(&pool, &note).await {
        Ok(_) => HttpResponse::Ok().finish(),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}

//database logic
#[tracing::instrument(name = "Saving new note in the database", skip(note, pool))]
pub async fn insert_note(pool: &PgPool, note: &Note) -> Result<(), sqlx::Error> {
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
    .execute(pool)
    .await
    .map_err(|e| {
        tracing::error!("Failed to execute query: {:?}", e);
        e
    })?;
    Ok(())
}
