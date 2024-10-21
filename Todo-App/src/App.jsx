import { Header } from "./componets/Header"
import { Tabs } from "./componets/Tabs"
import { TodoInput } from "./componets/TodoInput"
import { TodoList } from "./componets/TodoList"

function App() {
  const todos = [  
    { input: 'Hello! Add your first todo!', complete: true },
    { input: 'Get the groceries!', complete: false },
    { input: 'Learn how to web design', complete: false },
    { input: 'Say hi to gran gran', complete: true },
  ]
  
  return (
      <>
        <Header todos={todos}/>
        <Tabs todos={todos}/>
        <TodoList todos={todos}/>
        <TodoInput />
      </>
  )
}

export default App
