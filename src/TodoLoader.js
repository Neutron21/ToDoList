import React from "react";
import './css/TodoLoader.css';
import loader from './assets/SwingPreloader.gif';

function TodoLoader() {
    return (
       <div className="todoLoader">
           <img src={loader} className="imgLoader" alt="loader"/>
       </div>
    )
}
export { TodoLoader }