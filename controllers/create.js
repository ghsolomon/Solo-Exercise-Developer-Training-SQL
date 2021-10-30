const { Client } = require('pg');
const host = 'localhost';
const port = 5432;
const database = 'books';
const client = new Client({ host, port, database });

const create = async (text, values) => {
  try {
    await client.connect();
    const result = await client.query(text, values);
    client.end();
    console.log(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const values = process.argv.slice(2);
const query =
  'INSERT INTO "Books"("createdAt","updatedAt",title,edition,isbn13,description,language, "publicationDate") VALUES( $1, $1,$2, $3, $4, $5, $6, $7) RETURNING title, edition, isbn13, description, language, "publicationDate"';

create(query, [new Date(), ...values]);
