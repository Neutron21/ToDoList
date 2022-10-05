import React from 'react';
import { useLocalStorage } from './useLocalStorage';
 
const TodoContext = React.createContext();

function TodoProvider (props) {
    const {
        item: todos,
        saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const [filterList, setFilterList] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length > 0) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
      }
      if(filterList){
        searchedTodos = todos.filter(todo => !todo.completed);
      }

      if (filterList && searchValue.length > 0) {
          searchedTodos = todos.filter(todo => {
            if (!todo.completed) {
              const todoText = todo.text.toLowerCase();
              const searchText = searchValue.toLowerCase();     
              return todoText.includes(searchText);
            }
         
        })
      }
      const addTodos = text => {
        const newTodos = [...todos]
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos);
      }
      const completeTodos = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }
    
      const deleteTodos = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }
      const filterTodos = () => {
        setFilterList(!filterList);
        console.log(filterList);
      }
      
      React.useEffect(() => {
        console.log('useEffect');
      }, [totalTodos])
      
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            searchedTodos,
            openModal,
            filterList,
            addTodos,
            setSearchValue,
            completeTodos,
            deleteTodos,
            setOpenModal,
            filterTodos,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };