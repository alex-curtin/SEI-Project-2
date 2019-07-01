import React from 'react';
import { Link } from 'react-router-dom';
import { fixCategoryName } from '../services/helper-functions';

const Categories = (props) => {

  return (
    <div>
      <p>Select Categories (at least 3)</p>
      <div id="categories">
        {props.categories.map(cat => (
          <button
            className={"cat-button" +
              (props.selectedCats.includes(cat) ? "-on" : "-off")}
            key={cat.id}
            onClick={() =>
              props.changeSelected(cat)}
          >
            {fixCategoryName(cat.name)}
          </button>
        ))}
      </div>
      {props.selectedCats[2] &&
        <Link to="/start">
          <button id="done">DONE</button>
        </Link>
      }
    </div>
  )
}

export default Categories