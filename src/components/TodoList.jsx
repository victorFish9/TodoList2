import { useState } from "react";

export default function TodoList(props) {

    const [desc, setDesc] = useState({ desctiption: "", date: "" });

    const inputDescription = (event) => {
        setDesc({ ...desc, desctiption: event.target.value });
    }

    const inputDate = (event) => {
        setDesc({ ...desc, date: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(desc);
        setDesc({ desctiption: "", date: "" })
    }

    return (
        <div>
            <h1>TodoList</h1>
            <form onSubmit={handleSubmit}>
                <label>Description:</label>
                <input type='text' value={desc.desctiption} onChange={inputDescription} required />
                <label>Date:</label>
                <input type='date' value={desc.date} onChange={inputDate} required />
                <input type='submit' value="add" />
            </form>
        </div>
    )
}