import { useState } from 'react'
import './App.css'
import TodoTable from './components/TodoTable';
import TodoList from './components/TodoList';
import TodoGrid from './components/TodoGrid';

function App() {

  const [todos, setTodos] = useState([]);



  const addTodo = (desc) => {

    setTodos([...todos, desc]);
    console.log(todos);
  }

  const handleDelete = (index) => {
    const updatedList = todos.filter((_, i) => i !== index);
    setTodos(updatedList);
  }
  return (

    <>
      <div>
        <TodoList onSubmit={addTodo} />
      </div>
      <div className='todotable'>
        <TodoGrid todos={todos} handleDelete={handleDelete} />
        {/*<TodoTable todos={todos} onDelete={handleDelete} />*/}
      </div>
    </>
  )
}

export default App
