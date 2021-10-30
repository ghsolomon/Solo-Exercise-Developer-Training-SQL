const { Client } = require('pg');
const host = 'localhost';
const port = 5432;
const database = 'books';
const client = new Client({ host, port, database });

const update = async (text, values) => {
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
  'UPDATE "Books" SET edition=$2, isbn13=$3, description=$4, language=$5, "publicationDate"=$6 WHERE title=$1 RETURNING title, edition, isbn13, description, language, "publicationDate";';

update(query, values);
