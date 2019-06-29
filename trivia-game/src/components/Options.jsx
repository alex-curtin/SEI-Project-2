import React from 'react';
import { Link } from 'react-router-dom';

const Options = (props) => {
  const answer = props.answer;
  const wrong = props.wrong;
  return (
    <div>
      {(answer && wrong) &&
        <div className="options">
          <Link to='/result'>{props.wrong[0]}</Link>
          <Link to='/result'>{props.answer}</Link>
          <Link to='/result'>{props.wrong[1]}</Link>
          <Link to='/result'>{props.wrong[2]}</Link>
        </div>
      }
    </div >
  )
}

export default Options;