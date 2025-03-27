import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import './App.css'


interface item {
    id: number;
    text: string;
    completed: boolean
}

export const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<item[]>([]);
    const [input, setInput] = useState<string>("");

    const handleTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const addTodo = () => {
        if(input.trim() !== '') {
        const newTodo: item = {
            id: Date.now(),
            text: input,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setInput('');
        }
    }

    const deleteTodo = (id: number) => {
        const eraseTodo = todos.filter(todo => todo.id !== id)
        setTodos(eraseTodo);
    }

    return (
    <div className="main-container">
        <h1 className="todo-list">Todo List 2024</h1>
        <div className="div">
        <input className="field" maxLength={30} value={input.charAt(0).toUpperCase() + input.slice(1)} type="text" placeholder="Add to-do item" onChange={handleTodo}/>
        <FontAwesomeIcon onClick={addTodo} icon={faPlus} className="icon-1"></FontAwesomeIcon>
        </div>
        <p className="new-items">New Items</p>
        <form className="section">
        <ul>
            {todos.map((todo) => 
            <li key={todo.id}>
                <label>
                {todo.text}
                </label>
                <FontAwesomeIcon onClick={() => deleteTodo(todo.id)} icon={faTrashAlt} className="icon-2"></FontAwesomeIcon>
            </li>
            )}
        </ul>
        </form>
        </div>
    );
}





