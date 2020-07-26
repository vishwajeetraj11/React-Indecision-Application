import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        onRequestClose={props.handleClearSelected}
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelected}>Okay</button>
    </Modal>
);

export default OptionModal;