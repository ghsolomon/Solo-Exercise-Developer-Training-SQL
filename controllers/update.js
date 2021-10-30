const { Author, Book, db } = require('../db');
const args = process.argv.slice(2);

const update = async () => {
  try {
    const book = await Book.findOne({
      where: {
        title: args[0],
      },
      include: Author,
    });
    if (book) {
      book.edition = args[1];
      book.isbn13 = args[2];
      book.description = args[3];
      book.language = args[4];
      book.publicationDate = args[5];
      await book.save();

      const authorArray = Array.isArray(args[6]) ? args[6] : [args[6]];
      const authors = [];
      for (let authorName of authorArray) {
        const [author] = await Author.findOrCreate({
          where: { name: authorName },
        });
        authors.push(author);
      }
      await book.setAuthors(authors);
      console.log('Book updated successfully');
    } else {
      console.log('Book not found');
    }
    db.close();
  } catch (err) {
    console.log(err);
  }
};

update();
