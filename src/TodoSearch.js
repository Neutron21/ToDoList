import React from "react";
import './css/TodoSearch.css';
import { TodoContext } from "./TodoContext";
import { Icon } from "./Icon";

function TodoSearch() {

    const { searchValue, setSearchValue, filterTodos, filterList } = React.useContext(TodoContext);

    const onSearchValueChange = event => {
        setSearchValue(event.target.value)
        console.log(event.target.value);
    }
    return (
        <section>
            <Icon type='search'/>
            <input
                className="TodoSearch"
                placeholder="Buscar"
                value={searchValue}
                onChange={onSearchValueChange} />
                { filterList && <Icon type='list' onAction={() => filterTodos()}/> }
                { !filterList && <Icon type='exclamation' onAction={() => filterTodos()}/> }
        </section>
    )
}

export { TodoSearch }