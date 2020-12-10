import React, {Component, useContext} from 'react';
import {TodoContext} from "../contexts/TodoContext";

class TodoTable extends Component {
    render() {
        const context = useContext(TodoContext)
        return (
            <div>
                {context.todos.map(todo => (
                    <div>{todo.name}</div>
                ))}
            </div>
        );
    }
}

export default TodoTable;