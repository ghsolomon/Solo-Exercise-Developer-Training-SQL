import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Books from './Books';
import Book from './Book';
import Author from './Author';
import BookForm from './BookForm';
const Main = () => (
  <Router>
    <Link to='/books'>All Books</Link>
    {' • '}
    <Link to='/books/new'>New Book</Link>
    <Switch>
      <Route path='/books/new' component={BookForm} />
      <Route exact path='/' component={Books} />
      <Route exact path='/books' component={Books} />
      <Route path='/books/:isbn13/edit' component={BookForm} />
      <Route path='/books/:isbn13' component={Book} />
      <Route path='/authors/:name' component={Author} />
    </Switch>
  </Router>
);
export default Main;
