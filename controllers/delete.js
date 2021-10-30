const { Book, db } = require('../db');
const args = process.argv.slice(2);

const del = async () => {
  try {
    const book = await Book.destroy({
      where: {
        title: args[0],
      },
    });
    console.log('Book deleted successfully');
    db.close();
  } catch (err) {
    console.log(err);
  }
};

del();
