CREATE TABLE interests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO interests (name) VALUES
('Technology'),
('Health & Fitness'),
('Food & Drink'),
('Arts & Culture'),
('Sports'),
('Travel'),
('Music');