import React from "react";
import './css/CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = (msg) => {
        props.setOpenModal(!props.openModal);
    }
    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton }