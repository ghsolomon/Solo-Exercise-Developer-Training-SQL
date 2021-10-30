const { Author, Book, db } = require('../db');

const update = async ([
  title,
  edition,
  isbn13,
  description,
  language,
  publicationDate,
  authors,
]) => {
  try {
    const book = await Book.findOne({
      where: {
        title,
      },
      include: Author,
    });
    if (book) {
      await book.update({
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
      console.log('Book updated successfully');
    } else {
      console.log('Book not found');
    }
    db.close();
  } catch (err) {
    console.log(err);
  }
};

update(process.argv.slice(2));
