import './App.css';
import { useState, useEffect } from 'react'
import Form from './components/Form'
import Todos from './components/Todos'
import Footer from './components/Footer'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('')
  const [filterTodos, setFilterTodos] = useState([])
  const [toggleAll, setToggleAll] = useState(false)

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
    filteredTodos()
  }, [todos, status])
  
  return (
    <div className="App">
      <section className='todoapp'>
        <header>todos</header>
        <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} filterTodos={filterTodos} toggleAll={toggleAll} setToggleAll={setToggleAll} />
        <Footer todos={todos} setStatus={setStatus} setFilterTodos={setFilterTodos}/>
      </section>
    </div>
  );
}

export default App;
