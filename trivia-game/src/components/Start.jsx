import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <p>The game is about to start</p>
      <Link
        to='/game'
      >Start it</Link>
    </div>
  )
}

export default Start;