import axios from 'axios';

// ACTION TYPES
const SET_BOOKS = 'SET_BOOKS',
  UPDATE_BOOK = 'UPDATE_BOOK',
  ADD_BOOK = 'ADD_BOOK',
  DELETE_BOOK = 'DELETE_BOOK';

// ACTION CREATORS

const setBooks = (books) => ({
  type: SET_BOOKS,
  books,
});

const _updateBook = (book) => ({
  type: UPDATE_BOOK,
  book,
});

const _addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const _deleteBook = (isbn13) => ({
  type: DELETE_BOOK,
  isbn13,
});

// THUNK CREATORS
export const fetchBooks = () => async (dispatch) => {
  try {
    const { data: books } = await axios.get('/api/books');
    dispatch(setBooks(books));
  } catch (error) {
    console.log(error);
  }
};

export const addBook = (book) => async (dispatch) => {
  try {
    const { data: book } = await axios.post('/api/books', book);
    dispatch(_addBook(book));
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = (book) => async (dispatch) => {
  try {
    const { data: updatedBook } = await axios.put(
      `/api/books/${book.isbn13}`,
      book
    );
    dispatch(_updateBook(updatedBook));
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = (isbn13) => async (dispatch) => {
  try {
    await axios.delete(`/api/books/${isbn13}`);
    dispatch(_deleteBook(isbn13));
  } catch (error) {
    console.log(error);
  }
};

// REDUCER
export default (state = [], action) => {
  switch (action.type) {
    case SET_BOOKS:
      return action.books;
    case ADD_BOOK:
      return [...state, action.book];
    case UPDATE_BOOK:
      return state.map((book) =>
        book.isbn13 === action.book.isbn13 ? action.book : book
      );
    case DELETE_BOOK:
      return state.filter((book) => book.isbn13 !== action.isbn13);
    default:
      return state;
  }
};
