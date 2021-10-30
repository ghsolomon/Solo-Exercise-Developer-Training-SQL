const { Author, Book, db } = require('../db');
const args = process.argv.slice(2);

const read = async () => {
  try {
    const book = await Book.findOne({
      where: {
        title: args[0],
      },
      include: Author,
    });
    if (book) {
      console.log(book);
    } else {
      console.log('Book not found');
    }
    db.close();
  } catch (err) {
    console.log(err);
  }
};

read();
