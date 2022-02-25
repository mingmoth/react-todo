function Form({ input, setInput }) {
  const inputHandler = (e) => {
    setInput(e.target.value)
  }
  const submitInput = (e) => {
    if(!input.trim()) return
    if (e.key === 'Enter') {
      console.log(input)
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