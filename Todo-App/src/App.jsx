import { Header } from "./componets/Header"
import { Tabs } from "./componets/Tabs"
import { TodoInput } from "./componets/TodoInput"
import { TodoList } from "./componets/TodoList"
import { useState } from 'react'
function App() {
  // const todos = [  
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]
  
  // useState() is a react hook for user information entry takes a default value
  const [todos, setTodos] = useState([  { input: 'Hello! Add your first todo!', complete: false }])

  function handleAddTodo(newTodo){
    // Duplicate old todo list via spreading it out with ...todo then appending the variable 
    // newTodo and setting it to false.
    const newTodoList = [...todos, {input: newTodo, complete: false}]

    // Is the return statment for react hooks, but makes the screen look adjusted during the process
    setTodos(newTodoList)
  }

  function handleEditTodo(){
    
  }
  
  function handleDeleteTodo(){
    
  }

  return (
      <>
        <Header todos={todos}/>
        <Tabs todos={todos}/>
        <TodoList todos={todos}/>
        {/* Adding it to the actual app to use function */}
        <TodoInput hadleTodoAddTodo={handleAddTodo}/>
      </>
  )
}

export default App
