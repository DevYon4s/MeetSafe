CREATE TABLE interests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO interests (name) VALUES
('Reading'),
('Gaming'),
('Language Learning'),
('Writing'),
('Music'),
('Mental Health'),
('Outdoors'),
('Technology'),
('Art'),
('Photography');