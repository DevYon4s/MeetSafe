CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    max_participants INTEGER NOT NULL,
    cover_photo VARCHAR(255) NOT NULL,
    creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO events (title, description, location, max_participants, cover_photo, creator_id) VALUES
('Book Club Meetup', 'Discussing "The Shadow King" by Maaza Mengiste. All are welcome!', 'Tomoca Coffee, Addis Ababa', 20, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 1),
('Gebeta Tournament', 'A friendly tournament of Gebeta. Prizes for the top 3 players!', 'Unity Park, Addis Ababa', 16, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 2),
('Ge'ez Language Workshop', 'An introductory workshop to the Ge'ez script and basic grammar.', 'Addis Ababa University, Addis Ababa', 30, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 3),
('Poetry Slam Night', 'Share your original poetry or enjoy the performances of others.', 'Fendika Azmari Bet, Addis Ababa', 50, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 4),
('Traditional Music Jam Session', 'Bring your instruments and lets jam to some traditional Ethiopian tunes.', 'The Ethiopian National Theatre, Addis Ababa', 40, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 5),
('Mental Health Awareness Walk', 'A walk to raise awareness about mental health and wellness.', 'Meskel Square, Addis Ababa', 100, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 6),
('Hiking Trip to Entoto Hills', 'A scenic hike through the Entoto Hills. Pack a lunch and enjoy the views!', 'Entoto Hills, Addis Ababa', 25, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 7),
('Tech Talk: The Future of AI', 'A discussion on the latest trends and advancements in Artificial Intelligence.', 'Iceaddis, Addis Ababa', 60, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 8),
('Plein Air Painting Session', 'A casual painting session outdoors. All skill levels are welcome.', 'Friendship Park, Addis Ababa', 15, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 9),
('Amharic-English Language Exchange', 'Practice your Amharic or English with native speakers.', 'The Lime Tree, Addis Ababa', 30, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 10);