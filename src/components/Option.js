import React from "react";

const Option = (props) =>  (
      <div>
        {props.elementText}
        <button
          onClick={() => {
            props.handleDeleteOption(props.elementText);
          }}
        >
          Remove
        </button>
      </div>
    );
  

export default Option;