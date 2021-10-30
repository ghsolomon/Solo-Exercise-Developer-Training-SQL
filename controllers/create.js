const { Author, Book, db } = require('../db');

const create = async ([
  title,
  edition,
  isbn13,
  description,
  language,
  publicationDate,
  authors,
]) => {
  try {
    const book = await Book.create({
      title,
      edition,
      isbn13,
      description,
      language,
      publicationDate,
    });

    const authorArray = Array.isArray(authors) ? authors : [authors];
    const foundOrCreatedAuthors = [];
    for (let authorName of authorArray) {
      const [author] = await Author.findOrCreate({
        where: { name: authorName },
      });
      foundOrCreatedAuthors.push(author);
    }
    await book.setAuthors(foundOrCreatedAuthors);
    console.log('Book added successfully');
    db.close();
  } catch (err) {
    console.log(err);
  }
};

create(process.argv.slice(2));
