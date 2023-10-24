import { useState } from 'react'
import './App.css'
import TodoTable from './components/TodoTable';
import TodoList from './components/TodoList';
import TodoGrid from './components/TodoGrid';
import { Tab, Tabs } from '@mui/material';
import Home from './components/Home';

function App() {

  const [value, setValue] = useState("Home")
  const handleChange = (event, value) => {
    setValue(value)
  }


  /*
    const addTodo = (desc) => {
  
      setTodos([...todos, desc]);
      console.log(todos);
    }*/


  return (

    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" value="Home" />
        <Tab label="Add todo" value="Todo" />
      </Tabs>
      {value === "Home" && <Home />}
      {value === "Todo" && <TodoList />}
      <div className="form_list" >

      </div>
      <div className='todotable'>

        {/*<TodoTable todos={todos} onDelete={handleDelete} />*/}
      </div>
    </>
  )
}

export default App
