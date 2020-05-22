import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        onRequestClose={props.handleClearSelected}
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelected}>Okay</button>
    </Modal>
);

export default OptionModal;