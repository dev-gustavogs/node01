import sql from './sql.js';

sql`
  CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER
  );
`.then(() => {
  console.log("tabela criada")
})
