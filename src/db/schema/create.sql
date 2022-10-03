DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS bios CASCADE;
DROP TABLE IF EXISTS bio_images CASCADE;
DROP TABLE IF EXISTS swipes CASCADE;
DROP TABLE IF EXISTS conversations CASCADE;
DROP TABLE IF EXISTS participants CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS ghost_types CASCADE;
DROP TABLE IF EXISTS interested_types CASCADE;
DROP TABLE IF EXISTS block_users CASCADE;

CREATE TABLE users CASCADE (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE bios CASCADE (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  age INTEGER,
  bio_image_id INTEGER REFERENCES bio_images(id),
  location VARCHAR(255) NOT NULL,
  ghost_id INTEGER REFERENCES ghost_types(id),
  looking_for INTEGER REFERENCES interested_in(id)
  user_id INTEGER REFERENCES users(id),
  bio TEXT
);

CREATE TABLE bio_images CASCADE (
  id SERIAL PRIMARY KEY NOT NULL,
  img1_url VARCHAR(255) NOT NULL,
  img2_url VARCHAR(255) NOT NULL,
  img3_url VARCHAR(255) NOT NULL
);

CREATE TABLE swipes CASCADE (
  id SERIAL PRIMARY KEY NOT NULL,
  user_swiped INTEGER REFERENCES users(id),
  user_swiped_on INTEGER REFERENCES bios(user_id),
  is_swiped BOOLEAN NOT NULL DEFAULT FALSE,
  is_matched BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE conversations CASCADE (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE participants CASCADE (
  id SERIAL PRIMARY KEY NOT NULL,
  conversation_id INTEGER REFERENCES conversations(id),
  user1_id INTEGER REFERENCES users(id)
  user2_id INTEGER REFERENCES swipes(user_swiped_on),
);

CREATE TABLE messages CASCADE (
  id SERIAL PRIMARY KEY NOT NULL,
  message TEXT,
  participant1_id INTEGER REFERENCES participants(user1_id),
  participant2_id INTEGER REFERENCES participants(user2_id),
  timestamp DATETIME
);

CREATE TABLE ghost_types CASCADE (
  id SERIAL PRIMARY KEY NOT NULL,
  type TEXT
);

CREATE TABLE interested_types CASCADE (
  id SERIAL PRIMARY KEY NOT NULL,
  ghost_type_id INTEGER REFERENCES ghost_types(id),
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE block_users CASCADE (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  blocked_user_id INTEGER REFERENCES bios(user_id)
);