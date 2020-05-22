import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
      <div>
        <button onClick={props.deleteAll}>Remove All</button>
        {props.options.length === 0 && (
          <p>Please Add an Option to get Started!</p>
        )}
        {props.options.map((element) => (
          <Option
            key={element}
            elementText={element}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </div>
    );
  };
 
export default Options;
