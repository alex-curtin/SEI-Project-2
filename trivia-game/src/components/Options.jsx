import React from 'react';

const Options = (props) => {
  const options = props.options;
  return (
    <div className="options">
      {options &&
        options.map((option) => (
          <div key={option}>
            <button
              className="opt-button"
              id={option}
              onClick={props.handleSubmit}
            >{option}</button>
          </div>
        ))
      }
    </div >
  )
}

export default Options;