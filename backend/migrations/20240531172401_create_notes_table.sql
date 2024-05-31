-- Add migration script here
CREATE TABLE notes(
    id uuid NOT NULL,
    PRIMARY KEY (id),
    title TEXT NOT NULL,
    content TEXT,
    tag TEXT,
    created_at timestamptz NOT NULL
);