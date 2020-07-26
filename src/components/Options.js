import React from 'react';
import Option from './Option';

const Options = (props) =>  (
      <div>
      <div className="widget-header">
      <h3 className="widget-default-title">Your Options</h3>
      <button 
      className="button button--link"
      onClick={props.deleteAll}
      >
      Remove All
      </button>
      </div>
        {props.options.length === 0 && (
          <p className="placeholder">Please Add an Option to get Started!</p>
        )}
        {props.options.map((element, index) => (
          <Option
            key={element}
            elementText={element}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </div>
    );
  
 
export default Options;
