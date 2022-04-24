import React from "react";
import Todolist from "./todo/Todolist";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: 'Купить хлеб'},
    { id: 2, complited: false, title: 'Купить масло'},
    { id: 3, complited: false, title: 'Купить молоко'}
  ])

  function toggleTodo(id) {
    setTodos (todos.map(todo => {
      if (todo.id===id) {
        todo.complited = ! todo.complited
      }
      return todo
    }))
    
  }

  return (<div className="wrapper">
    <h1>React Tutorial</h1>

    <Todolist todos={todos} onToggle={toggleTodo}></Todolist>
  </div>
  )
}

export default App;
