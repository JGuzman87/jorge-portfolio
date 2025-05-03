-- CREATE DATABASE portfolio_contact;

-- DROP TABLE IF EXISTS contact_info;

-- CREATE TABLE contact_info (
--     id SERIAL PRIMARY KEY,
--     email TEXT NOT NULL,
--     name VARCHAR(45) NOT NULL,
--     comment TEXT NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- INSERT INTO contact_info (email, name, comment)
-- VALUES('jguzman@aim.com', 'jaynathan Karmyckel', 'hi this is a comment about something');

SELECT 
  id,
  email,
  name,
  comment,
  TO_CHAR(created_at, 'YYYY-MM-DD HH12:MI AM') AS formatted_time
FROM contact_info;