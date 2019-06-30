import React from 'react';

const Categories = (props) => {

  return (
    <div>
      <div>
        <p>Your Categories:</p>
        {props.selectedCats.map(cat => (
          <p className="your-cat">{cat.name}</p>
        ))
        }
      </div>
      <p>Select Categories</p>
      <div>
        {props.categories.map(cat => (
          <button
            className="cat-button"
            key={cat.id}
            onClick={() =>
              props.changeSelected(cat)}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Categories