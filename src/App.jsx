import { Header } from "./componets/Header"
import { Tabs } from "./componets/Tabs"
import { TodoInput } from "./componets/TodoInput"
import { TodoList } from "./componets/TodoList"
import { useState, useEffect } from 'react'

function App() {
  // const todos = [  
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]
  
  // useState() is a react hook for user information entry takes a default value
  const [todos, setTodos] = useState([  
    { input: 'Hello! Add your first todo!', complete: false }
  ])
  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo){
    // Duplicate old todo list via spreading it out with ...todo then appending the variable 
    // newTodo and setting it to false.
    const newTodoList = [...todos, {input: newTodo, complete: false}]

    // Is the return statment for react hooks, but makes the screen look adjusted during the process
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index){
    //Update/edit/modify
    let newTodoList = [...todos]
    let compeletedTodo = todos[index]
    compeletedTodo['complete'] = true
    newTodoList[index] = compeletedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  
  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }


  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }

  // [] contains when to run the effect. On mount event to run as soon as possible is the blank []
  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {
      return
    }
    let  db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
      <>
        <Header todos={todos}/>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
        <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} selectedTab={selectedTab}/>
        {/* Adding it to the actual app to use function */}
        <TodoInput handleAddTodo={handleAddTodo}/>
      </>
  )
}

export default App
