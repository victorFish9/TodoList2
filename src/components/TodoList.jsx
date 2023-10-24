import { useState } from "react";
import { Button, TextField, Stack } from '@mui/material'
import TodoGrid from "./TodoGrid";


export default function TodoList(props) {

    const [desc, setDesc] = useState({ desctiption: "", date: "", priority: "" });
    const [todos, setTodos] = useState([]);

    const inputDescription = (event) => {
        setDesc({ ...desc, desctiption: event.target.value });
    }

    const inputDate = (event) => {
        setDesc({ ...desc, date: event.target.value });
    }

    const inputPriority = (event) => {
        setDesc({ ...desc, priority: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, desc])
        setDesc({ desctiption: "", date: "", priority: "" })
    }
    const handleDelete = (index) => {
        const updatedList = todos.filter((_, i) => i !== index);
        setTodos(updatedList);
    }

    return (
        <div>
            <h1>TodoList</h1>
            <form onSubmit={handleSubmit} >
                <label>Description:</label>
                <input type='text' value={desc.desctiption} onChange={inputDescription} required name="Description" />
                <label>Date:</label>
                <input type='date' value={desc.date} onChange={inputDate} required name="Date" />
                <label>Priority: </label>
                <input type="text" value={desc.priority} onChange={inputPriority} required name="Priority" />
                <input type='submit' value="add" />
            </form>
            <TodoGrid todos={todos} handleDelete={handleDelete} />
        </div>
    )
}