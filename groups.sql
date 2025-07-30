CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO groups (name, image, description) VALUES
('Bookworms United', 'https://pixabay.com/photos/tea-time-reading-poetry-leisure-3240766/', 'A safe space for readers of all genres to share recommendations, discuss literature, and organize book club meetups.'),
('Traditional Games & Gebeta Club', 'https://cf.geekdo-images.com/aTsAClEwPQDHsgTBISjqpA__imagepage/img/EXt2JXuxPsGgajwTMekCq_XyQoo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1557975.jpg', 'Connect with others who love Ethiopian traditional games like Gebeta, or want to learn and play together in person.'),
('Geʽez Language Learners', 'https://encyclopedia.pub/media/common/202211/mceclip0-6375d45a6e3ad.png', 'Practice and learn Geʽez with others passionate about preserving Ethiopia’s ancient language and culture.'),
('Creative Writers & Poets', 'https://pixabay.com/photos/book-pen-notebook-diary-desk-4806076/', 'Share your writing, get feedback, and collaborate on creative projects with other aspiring writers and poets.'),
('Indigenous Music & Instruments', 'https://graphic.nobody.jp/illustrations/africa/ethiopian-instruments.jpg', 'For those interested in Ethiopian music, traditional instruments, and cultural performances. Jam, learn, and celebrate together.'),
('Mental Health & Wellness Circle', 'https://pixabay.com/illustrations/ai-generated-brain-maze-mind-8475824/', 'A supportive group for open conversations about mental health, self-care, and building resilience—no judgment, just support.'),
('Outdoor Adventurers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfjaaP0DjotHX8h196scN6ia6oCd5kZp-Kg&s', 'Find hiking buddies, plan nature walks, and explore Ethiopia’s beautiful landscapes with like-minded explorers.'),
('Tech & Coding Nerds', 'https://pixabay.com/illustrations/ai-generated-woman-programmer-8775232/', 'Meet other tech enthusiasts, share coding tips, and collaborate on fun projects or hackathons.'),
('Art & Sketch Collective', 'https://pixabay.com/vectors/house-winter-season-drawing-art-6968620/', 'Connect with artists, illustrators, and doodlers. Share your work, learn new techniques, and create together.'),
('Language Exchange Café', 'https://www.pexels.com/photo/shallow-focus-photo-of-world-globe-1098515/', 'Share your photography passion, learn new skills, and organize photo walks to capture Ethiopia’s beauty together.');
