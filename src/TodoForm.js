import React from 'react';
import './css/TodoForm.css';
import { TodoContext } from './TodoContext';


function TodoForm() {

    const [newTodoValue, setnewTodoValue ] = React.useState('');
    const { addTodos, setOpenModal } = React.useContext(TodoContext );

    const onWrite = (event) => {
        setnewTodoValue(event.target.value);
    }

    const onCancel = ()=>{
        setnewTodoValue('');
        setOpenModal();
    }
    const onAdd = (event)=>{
        event.preventDefault();
        if (newTodoValue) {
            addTodos(newTodoValue);
            setnewTodoValue('');
            setOpenModal();
        }
    }
    return(
        <form onSubmit={onAdd}>
            <label>Agrega una tarea</label>
            <textarea placeholder='Bañar al perro' value={newTodoValue} onChange={onWrite}/>
            <div className='TodoForm-buttonContainer'>
                <button className='TodoForm-button TodoForm-button-cancel' type='button' onClick={onCancel}>Cancelar</button>
                <button className='TodoForm-button TodoForm-button-add' type='submit' >Crear</button>
            </div>
        </form>
    );
}

export { TodoForm };