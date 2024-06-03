use actix_web::{web, HttpResponse};
use chrono::Utc;
use sqlx::PgPool;
use tracing_futures::Instrument;
use uuid::Uuid;
#[derive(serde::Deserialize, Debug)]
pub struct Note {
    title: String,
    content: String,
    tag: String,
}
#[tracing::instrument(
name = "Adding a new subscriber",
skip(note, pool),
fields(
request_id = %Uuid::new_v4(),
note_title = %note.title // TODO remove eventually so that user notes are not logged, keep for testing
)
)]
pub async fn create_note(note: web::Json<Note>, pool: web::Data<PgPool>) -> HttpResponse {
    let query_span = tracing::info_span!("Saving new note in the database");
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
    .instrument(query_span)
    .await
    {
        Ok(_) => HttpResponse::Ok().finish(),
        Err(e) => {
            tracing::error!("Failed to execute query: {:?}", e);
            HttpResponse::InternalServerError().finish()
        }
    }
}
