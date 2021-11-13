import axios from 'axios';

// ACTION TYPES
const SET_AUTHOR = 'SET_AUTHOR',
  CLEAR_AUTHOR = 'CLEAR_AUTHOR';

// ACTION CREATORS
export const clearAuthor = () => ({
  type: CLEAR_AUTHOR,
});

const _setAuthor = (author) => ({
  type: SET_AUTHOR,
  author,
});

// THUNK CREATORS
export const setAuthor = (authorName) => async (dispatch) => {
  try {
    const { data: author } = await axios.get(`/api/authors/${authorName}`);
    dispatch(_setAuthor(author));
  } catch (error) {
    console.log(error);
  }
};

export const updateAuthor = (oldName, newName, history) => async (dispatch) => {
  try {
    await axios.put(`/api/authors/${oldName}`, { name: newName });
    history.push(`/authors/${newName}`);
  } catch (error) {
    console.log(error);
  }
};

export const createAuthor = (name, history) => async (dispatch) => {
  try {
    await axios.post('/api/authors', { name });
    history.push(`/authors/${name}`);
  } catch (error) {
    console.log(error);
  }
};

// REDUCER
export default (state = {}, action) => {
  switch (action.type) {
    case CLEAR_AUTHOR:
      return {};
    case SET_AUTHOR:
      return action.author;
    default:
      return state;
  }
};
