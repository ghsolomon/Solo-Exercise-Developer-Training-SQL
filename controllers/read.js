const { Client } = require('pg');
const host = 'localhost';
const port = 5432;
const database = 'books';
const client = new Client({ host, port, database });

const read = async (text, values) => {
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
  'SELECT title, edition, isbn13, description, language, "publicationDate" FROM "Books" WHERE title=$1;';
for (let value of values) {
  read(query, [value]);
}
