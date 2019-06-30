import React from 'react';
import { Link } from 'react-router-dom';
import { fixCategoryName } from '../services/helper-functions';

const Categories = (props) => {

  return (
    <div>
      {props.selectedCats[0] &&
        <div>
          <p>Your Categories:</p>
          {props.selectedCats.map(cat => (
            <div key={cat.id}>
              <p className="your-cat">{fixCategoryName(cat.name)}</p>
            </div>
          ))
          }
        </div>}
      <p>Select Categories</p>
      <div>
        {props.categories.map(cat => (
          <button
            className="cat-button"
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