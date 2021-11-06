import React from 'react';
import { Link } from 'react-router-dom';

const AuthorLink = ({ author }) => (
  <Link to={`/authors/${author.name}`}>{author.name}</Link>
);
export default AuthorLink;
