import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const storageTodos = localStorage.getItem(itemName);
  
          let parsedItem = !storageTodos ? localStorage.setItem(itemName, JSON.stringify(initialValue)) : JSON.parse(storageTodos);
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setError(true);
        }
      }, 1000)
    })
  
  
    const saveTodos = (newTodos) => {
      try {
        console.log(newTodos);
        const strTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemName, strTodos);
        setItem(newTodos);
      } catch (error) {
        console.log(error);
        setError(true);
      }
  
    }
    return {
      item,
      saveTodos,
      loading,
      error
    }
  
  }

  export { useLocalStorage };