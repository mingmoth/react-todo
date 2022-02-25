import './App.css';
import { useState } from 'react'
import Form from './components/Form'
import Todos from './components/Todos'

function App() {
  const [input, setInput] = useState('')
  // const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <section className='todoapp'>
        <header>todos</header>
        <Form input={input} setInput={setInput} />
        <Todos />
      </section>
    </div>
  );
}

export default App;
