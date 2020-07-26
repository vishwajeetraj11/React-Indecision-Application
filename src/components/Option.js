import React from "react";

const Option = (props) =>  (
      <div className="option">
        {
          props.elementText && <p className="option-text">{props.count}. {props.elementText}</p>
        }
        <button
          className="button button--link"
          onClick={() => {
            props.handleDeleteOption(props.elementText);
          }}
        >
          Remove
        </button>
      </div>
    );
  

export default Option;