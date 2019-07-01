import React from 'react';
import { Link } from 'react-router-dom';
import { fixCategoryName } from '../services/helper-functions';

const Categories = (props) => {

  return (
    <div>
      <p>Select Categories</p>
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
      {props.selectedCats[0] &&
        <Link to="/">
          DONE
          </Link>
      }
    </div>
  )
}

export default Categories