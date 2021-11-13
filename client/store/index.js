import { applyMiddleware, combineReducers, createStore } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import author from './author';
import books from './books';
import book from './book';

export default createStore(
  combineReducers({ author, books, book }),
  applyMiddleware(thunk, loggingMiddleware)
);
