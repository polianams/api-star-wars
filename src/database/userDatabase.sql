CREATE DATABASE apisw;

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
    );

CREATE TABLE
    favorites (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        character_name TEXT,
        FOREIGN KEY (user_id) REFERENCES users (id)
    );