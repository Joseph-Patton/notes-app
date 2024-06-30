use actix_web::{http::header::ContentType, web, HttpResponse};
use chrono::{serde::ts_seconds, DateTime, Utc};
use sqlx::PgPool;
use uuid::Uuid;

#[derive(serde::Deserialize, Debug)]
pub struct UninitialisedNote {
    title: String,
    content: String,
    tag: String,
}

// Create logic
#[tracing::instrument(
name = "Adding a new note",
skip(uniitialised_note, pool),
fields(
uniitialised_note_title = %uniitialised_note.title // TODO remove eventually so that user notes are not logged
)
)]
pub async fn create_note(
    uniitialised_note: web::Json<UninitialisedNote>,
    pool: web::Data<PgPool>,
) -> HttpResponse {
    match insert_note(&pool, &uniitialised_note).await {
        Ok(_) => HttpResponse::Ok().finish(),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}

// Create database logic
#[tracing::instrument(name = "Saving new note in the database", skip(unitialised_note, pool))]
async fn insert_note(
    pool: &PgPool,
    unitialised_note: &UninitialisedNote,
) -> Result<(), sqlx::Error> {
    sqlx::query!(
        r#"
        INSERT INTO notes (id, title, content, tag, created_at)
        VALUES ($1, $2, $3, $4, $5)
        "#,
        Uuid::new_v4(),
        unitialised_note.title,
        unitialised_note.content,
        unitialised_note.tag,
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
#[derive(serde::Serialize, serde::Deserialize, Debug)]
pub struct Note {
    pub id: Uuid,
    pub title: String,
    pub content: Option<String>,
    pub tag: Option<String>,
    #[serde(with = "ts_seconds")]
    pub created_at: DateTime<Utc>,
    pub is_archived: bool,
}

pub type Notes = Vec<Note>;

#[tracing::instrument(name = "Getting notes list", skip(pool))]
pub async fn return_notes(pool: web::Data<PgPool>) -> HttpResponse {
    match fetch_notes(&pool).await {
        Ok(notes) => HttpResponse::Ok()
            .content_type(ContentType::json())
            .body(serde_json::to_string(&notes).unwrap()),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}

//database logic
#[tracing::instrument(name = "Fetching notes list from database", skip(pool))]
async fn fetch_notes(pool: &PgPool) -> Result<Notes, sqlx::Error> {
    let notes = sqlx::query_as!(
        Note,
        r#"
        SELECT id, title, content, tag, created_at, is_archived FROM notes
        "#
    )
    .fetch_all(pool)
    .await
    .map_err(|e| {
        tracing::error!("Failed to execute query: {:?}", e);
        e
    })?;
    //info_span!("Content of notes: {:?}", notes);
    Ok(notes)
}

// Delete logic
#[tracing::instrument(name = "Deleting a note", skip(pool))]
pub async fn delete_note(pool: web::Data<PgPool>, note_id: web::Json<Uuid>) -> HttpResponse {
    match delete_note_helper(&pool, &note_id).await {
        Ok(_) => HttpResponse::Ok().finish(),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}

// Delete database logic
#[tracing::instrument(name = "Deleting note from the database", skip(pool))]
async fn delete_note_helper(pool: &PgPool, note_id: &Uuid) -> Result<(), sqlx::Error> {
    sqlx::query!(
        r#"
        DELETE FROM notes WHERE id = $1
        "#,
        note_id
    )
    .execute(pool)
    .await
    .map_err(|e| {
        tracing::error!("Failed to execute query: {:?}", e);
        e
    })?;
    Ok(())
}

#[derive(serde::Serialize, serde::Deserialize, Debug)]
pub struct UpdateNote {
    pub id: Uuid,
    pub title: String,
    pub content: Option<String>,
    pub tag: Option<String>,
    pub is_archived: bool,
}

// Update note logic
#[tracing::instrument(name = "Updating a note", skip(pool))]
pub async fn update_note(pool: web::Data<PgPool>, note: web::Json<UpdateNote>) -> HttpResponse {
    match update_note_helper(&pool, &note).await {
        Ok(_) => HttpResponse::Ok().finish(),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}

// Update note database logic
#[tracing::instrument(name = "Deleting note from the database", skip(pool, note)
fields(
note_id = %note.id
)

)]
async fn update_note_helper(pool: &PgPool, note: &UpdateNote) -> Result<(), sqlx::Error> {
    sqlx::query!(
        r#"
        UPDATE notes 
        SET title = $1, content = $2, tag = $3, is_archived =$4
        WHERE id = $5
        "#,
        note.title,
        note.content,
        note.tag,
        note.is_archived,
        note.id,
    )
    .execute(pool)
    .await
    .map_err(|e| {
        tracing::error!("Failed to execute query: {:?}", e);
        e
    })?;
    Ok(())
}
