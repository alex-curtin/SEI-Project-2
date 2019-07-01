import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home">
      <h2>Select some categories to start the game</h2>
      <Link to='/categories'>
        <button>If you insist</button>
      </Link>
    </div>
  )
}

export default Home;