import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {TodoList} from "./Components/ToDoComponent/TodoList"
function App() {
  const [count, setCount] = useState(0)

  return (
  <TodoList></TodoList>
  )
}

export default App
