import React from 'react';

const Action = (props) => {
    return (
      <div>
        <button onClick={props.handlePickOption} disabled={!props.optionsLength}>
          What Should I do ?
        </button>
      </div>
    );
  };
 
export default Action;
