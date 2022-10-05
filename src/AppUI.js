import React from 'react';
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { Modal } from "./Modal";
import { TodoForm } from './TodoForm';
import { TodoLoader } from './TodoLoader';
import './css/App.css'

function AppUI() {

    const { error,
            loading,
            searchValue,
            searchedTodos,
            deleteTodos,
            completeTodos,
            openModal,
            setOpenModal,
            filterList
        } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Hubo un error :/</p>}
                {loading && <TodoLoader/>}
                {(!loading && !searchedTodos.length && !searchValue && !filterList) && <p>Crea tu primer To Do</p>}
                {(!loading && !searchedTodos.length && !searchValue && filterList) && <p>Felicidades no hay Tareas pendientes</p>}
                {(!loading && !searchedTodos.length && searchValue) && <p>No hay coincidencias</p>}
                
                {searchedTodos.map((todo, index) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onDelete={() => deleteTodos(todo.text)}
                        onComplete={() => completeTodos(todo.text)} />
                ))}
            </TodoList>
            {openModal && 
            <Modal>
                <TodoForm/>
            </Modal>
            }
            <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal}/>
        </React.Fragment>
    );
}

export { AppUI }