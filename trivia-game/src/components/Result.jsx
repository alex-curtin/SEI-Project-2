import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {
  return (
    <div>
      <p>No</p>
      <p>Yes</p>
      <p>No</p>
      <p>No</p>
      <button
        onClick={() => <Link to="/question" />}
      >Next Question</button>
    </div>
  )
}

export default Result