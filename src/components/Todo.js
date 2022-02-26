function Todo({ todo, todos, setTodos, editTodo, setEditTodo }) {
  const toggleTodo = () => {
    setTodos(
      todos.map(t => {
        if(t.id === todo.id) {
          return {
            ...t,
            completed: !t.completed
          }
        }
        return t
      })
    )
  }
  const removeTodo = () => {
    setTodos(
      todos.filter(t => t.id !== todo.id)
    )
  }
  const startEditTodo = () => {
    setEditTodo({
      ...todo
    })
  }
  const editingTodo = (e) => {
    setEditTodo({
      ...editTodo,
      text: e.target.value
    })
  }
  const cancelEdit = (e) => {
    setEditTodo({
    })
    e.target.value = todo.text
  }
  const submitEdit = (e) => {
    if(!editTodo.text.trim()) return
    if(e.key === 'Enter') {
      setEditTodo({})
      setTodos(
        todos.map(t => {
          if (t.id === editTodo.id) {
            return t = {
              ...editTodo
            }
          }
          return t
        })
      )
    }
  }

  return (
    <li key={todo.id} className={`"todo" ${todo.id === editTodo.id ? "editing" : ""} ${todo.completed? "completed": ""}`} >
      <div className="view">
        <input type="checkbox" className="toggle" checked={todo.completed} onChange={toggleTodo} />
        <label htmlFor="" onDoubleClick={startEditTodo} >{todo.text}</label>
        <button className="destroy" onClick={removeTodo}></button>
      </div>
      <input autoFocus type="text" className="edit" defaultValue={editTodo.text} onChange={editingTodo} onBlur={cancelEdit} onKeyDown={submitEdit} />
    </li>
  )
}

export default Todo