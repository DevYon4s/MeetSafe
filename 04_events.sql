-- Updated table definition
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    location VARCHAR(255) NOT NULL,
    date_time TIMESTAMP NOT NULL,
    creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    interest_id INTEGER REFERENCES interests(id) ON DELETE SET NULL,
    max_participants INTEGER,
    cover_photo VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (id, full_name, picture, email_address, gender, address, birthdate, nationality, phone_number)
VALUES (
    1,
    'John Doe',
    'https://example.com/path/to/profile.jpg',
    'john.doe@example.com',
    'Male',
    '123 Main Street, Anytown, USA',
    '1990-05-15',
    'American',
    '+1 (555) 123-4567'
);

-- Sample inserts with cover photos
INSERT INTO events (title, description, location, date_time, creator_id, interest_id, max_participants, cover_photo)
VALUES (
    'React Conference 2023',
    'Annual conference for React developers with workshops and talks',
    'Convention Center, Tech City',
    '2023-11-15 09:00:00',
    1,
    1,
    200,
    'https://plus.unsplash.com/premium_photo-1679547202671-f9dbbf466db4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
);

INSERT INTO events (title, description, location, date_time, creator_id, interest_id, max_participants, cover_photo)
VALUES (
    'Central Park Morning Run',
    'Weekly 5K running group for all fitness levels',
    'Central Park, New York',
    '2023-10-21 07:30:00',
    1,
    1,
    50,
    'https://plus.unsplash.com/premium_photo-1682116752956-c880046f5361?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFya3xlbnwwfHwwfHx8MA%3D%3D'
);

INSERT INTO events (title, description, location, date_time, creator_id, interest_id, max_participants, cover_photo)
VALUES (
    'Italian Pasta Masterclass',
    'Learn to make fresh pasta from scratch with Chef Mario',
    'Culinary Arts School, Downtown',
    '2023-11-05 18:00:00',
    1,
    1,
    15,
    'https://images.unsplash.com/photo-1593548615309-5a45c504f994?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D'
);

INSERT INTO events (title, description, location, date_time, creator_id, interest_id, max_participants, cover_photo)
VALUES (
    'Jazz Night at the Blue Note',
    'Live jazz performance featuring local artists',
    'The Blue Note Club',
    '2023-12-10 20:00:00',
    1,
    1,
    100,
    'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amF6enxlbnwwfHwwfHx8MA%3D%3D'
);