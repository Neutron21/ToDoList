
import React from "react";
import './css/TodoItem.css';
import { FaCheck } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";


function TodoItem(props) {
   
    return(
        <li className="TodoItem">
            <span  className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
             onClick={props.onComplete}
            >
                <FaCheck/>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
                >
                <FaTimesCircle/>
            </span>
        </li>
    )
}

export {TodoItem}