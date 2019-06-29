import React from 'react';

const Categories = (props) => {
  return (
    <div>
      <p>Select Categories</p>
      <form onSubmit={props.handleSubmit}>
        {props.categories.map(cat => (
          <div key={cat.id}>
            <input
              type="checkbox"
              name={cat.name}
              id={cat.id}
              onSubmit={props.handleCheck}
            />
            <label htmlFor={cat.name}>
              {cat.name}
            </label>
          </div>
        ))}
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default Categories