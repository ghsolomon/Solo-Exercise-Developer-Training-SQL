import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './Books';
import Book from './Book';
import Author from './Author';
const Main = () => (
  <Router>
    <div>
      <Route exact path='/' component={Books} />
      <Route exact path='/books' component={Books} />
      <Route path='/books/:isbn13' component={Book} />
      <Route path='/authors/:name' component={Author} />
    </div>
  </Router>
);
export default Main;
