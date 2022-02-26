import './App.css';
import { useState, useEffect, useMemo } from 'react'
import Form from './components/Form'
import Todos from './components/Todos'
import Footer from './components/Footer'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('All')
  const [filterTodos, setFilterTodos] = useState([])
  const [editTodo, setEditTodo] = useState({})
  const [toggleAll, setToggleAll] = useState(false)
  const activeTodos = useMemo(() => todos.filter(todo => !todo.completed).length, [todos])

  useEffect(() => {
    const filteredTodos = () => {
      switch (status) {
        case 'Active':
          setFilterTodos(todos.filter(todo => !todo.completed))
          break
        case 'Completed':
          setFilterTodos(todos.filter(todo => todo.completed))
          break
        default:
          setFilterTodos(todos)
      }
    }
    const toggleAllTodo = () => {
      switch (activeTodos) {
        case 0:
          setToggleAll(true)
          break
        default:
          setToggleAll(false)
      }
    }

    filteredTodos()
    toggleAllTodo()
  }, [todos, status, activeTodos])
  
  return (
    <div className="App">
      <section className='todoapp'>
        <header>
          <h1>todos</h1>
        </header>
        <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} filterTodos={filterTodos} toggleAll={toggleAll} setToggleAll={setToggleAll} activeTodos={activeTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        {todos.length ? (<Footer todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} setFilterTodos={setFilterTodos} activeTodos={activeTodos} />): null}
      </section>
    </div>
  );
}

export default App;
