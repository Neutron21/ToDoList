import React from 'react';
import './css/Icon.css'
import { FaSearchengin } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

function Icon(props) {


    return(
        <span  onClick={props.onAction}>
        
            {props.type === 'search' &&  <FaSearchengin className="SearchIcon"/>}
            {props.type === 'list' &&   <FaListUl className='SizeIcon' title='Ver todos'/>}
            {props.type === 'exclamation' &&   <FaExclamationCircle className='SizeIcon' title='Pendientes'/>}
        </span>
    );
}

export { Icon } 