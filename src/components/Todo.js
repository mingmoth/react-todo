function Todo({ todo, todos, setTodos}) {
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
    console.log(todo.id)
    setTodos(
      todos.filter(t => t.id !== todo.id)
    )
  }
  return (
    <li className="todo" key={todo.id} >
      <div className="view">
        <input type="checkbox" className="toggle" defaultChecked={todo.completed} onClick={toggleTodo}/>
        <label htmlFor="">{todo.text}</label>
        <button className="destroy" onClick={removeTodo}></button>
      </div>
      <input type="text" className="edit" />
    </li>
  )
}

export default Todo