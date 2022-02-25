import { v4 as uuidv4 } from 'uuid'

function Form({ input, setInput, todos, setTodos }) {
  const inputHandler = (e) => {
    setInput(e.target.value)
  }
  const submitInput = (e) => {
    if(!input.trim()) return
    if (e.key === 'Enter') {
      setTodos([
        ...todos, {
          text: input.trim(),
          completed: false,
          id: uuidv4()
        }
      ])
      e.target.value=''
    }
    setInput('')
  }
  return (
    <input 
      type="text" 
      className="new-todo" 
      autoFocus 
      placeholder="需要做什麼？"
      onChange={inputHandler}
      onKeyDown={submitInput} />
  )
}

export default Form