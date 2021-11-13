import axios from 'axios';

// ACTION TYPES
const SET_BOOK = 'SET_BOOK',
  CLEAR_BOOK = 'CLEAR_BOOK';

// ACTION CREATORS
export const clearBook = () => ({
  type: CLEAR_BOOK,
});

const _setBook = (book) => ({
  type: SET_BOOK,
  book,
});

// THUNK CREATORS
export const setBook = (isbn13) => async (dispatch) => {
  try {
    const { data: book } = await axios.get(`/api/books/${isbn13}`);
    dispatch(_setBook(book));
  } catch (error) {
    console.log(error);
  }
};

// REDUCER
export default (state = {}, action) => {
  switch (action.type) {
    case CLEAR_BOOK:
      return {};
    case SET_BOOK:
      return action.book;
    default:
      return state;
  }
};
