const { Author, Book, db } = require('../db');

const read = async (title) => {
  try {
    const book = await Book.findOne({
      where: {
        title,
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

read(process.argv[2]);
