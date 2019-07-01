import React from 'react';
import { Link } from 'react-router-dom';

const Start = (props) => {
  return (
    <div>
      <p>start game</p>
      <Link
        to='/game'
      >Start it</Link>
    </div>
  )
}

export default Start;