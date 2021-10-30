const { Client } = require('pg');
const host = 'localhost';
const port = 5432;
const database = 'books';
const client = new Client({ host, port, database });

const del = async (text, values) => {
  try {
    await client.connect();
    const result = await client.query(text, values);
    client.end();
    console.log(`Deleted ${values}`);
  } catch (error) {
    console.log(error);
  }
};

const values = process.argv.slice(2);
const query = 'DELETE FROM "Books" WHERE title=$1;';
for (let value of values) {
  del(query, [value]);
}
