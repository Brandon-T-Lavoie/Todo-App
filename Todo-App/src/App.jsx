import { Header } from "./componets/Header"
import { Tabs } from "./componets/Tabs"
import { TodoInput } from "./componets/TodoInput"
import { TodoList } from "./componets/TodoList"

function App() {
  return (
      <div>
        <Header/>
        <Tabs/>
        <TodoList />
        <TodoInput />
      </div>
  )
}

export default App
