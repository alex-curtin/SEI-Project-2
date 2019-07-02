import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home">
      <h2>It's time to test your knowledge!</h2>
      <Link to='/categories'>
        <button className="button"
          id="start">IF YOU INSIST</button>
      </Link>
    </div>
  )
}

export default Home;