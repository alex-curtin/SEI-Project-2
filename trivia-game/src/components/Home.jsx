import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home">
      <Link to='/categories'> Select Categories</Link>
      <Link to='/start'>Start Game</Link>
    </div>
  )
}

export default Home;