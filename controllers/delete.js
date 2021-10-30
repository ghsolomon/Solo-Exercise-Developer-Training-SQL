const { Book, db } = require('../db');

const del = async (title) => {
  try {
    await Book.destroy({
      where: {
        title,
      },
    });
    console.log('Book deleted successfully');
    db.close();
  } catch (err) {
    console.log(err);
  }
};

del(process.argv[2]);
