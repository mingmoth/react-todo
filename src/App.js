import './App.css';
import { useState } from 'react'
import Form from './components/Form'
import Todos from './components/Todos'
import Footer from './components/Footer'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <section className='todoapp'>
        <header>todos</header>
        <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
        <Footer todos={todos} />
      </section>
    </div>
  );
}

export default App;
