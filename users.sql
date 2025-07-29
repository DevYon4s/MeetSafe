CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    picture TEXT,
    email_address VARCHAR(255) UNIQUE NOT NULL,
    gender VARCHAR(50),
    address TEXT,
    birthdate DATE,
    nationality VARCHAR(255),
    phone_number VARCHAR(50)
);
