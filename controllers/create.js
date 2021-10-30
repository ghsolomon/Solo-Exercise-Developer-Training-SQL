const { Author, Book, db } = require('../db');
const args = process.argv.slice(2);

const create = async () => {
  try {
    const book = await Book.create({
      title: args[0],
      edition: args[1],
      isbn13: args[2],
      description: args[3],
      language: args[4],
      publicationDate: args[5],
    });

    const authorArray = Array.isArray(args[6]) ? args[6] : [args[6]];

    for (let authorName of authorArray) {
      const [author] = await Author.findOrCreate({
        where: { name: authorName },
      });
      await book.addAuthor(author);
    }
    console.log('Book added successfully');
    db.close();
  } catch (err) {
    console.log(err);
  }
};

create();
