function Footer({ todos, setTodos, status, setStatus, activeTodos }) {
  const toggleStatus = (e) => {
    setStatus(e.target.text)
  }
  const clearCompleted = () => {
    setTodos(
      todos.filter(todo => !todo.completed)
    )
  }
  return (
    <footer className="footer">
      <span className="todo-count"> <strong> {activeTodos} </strong> {activeTodos.length > 1? 'items' : 'item'} left </span>
      <ul className="filters">
        <li>
          <a href="#/all" onClick={toggleStatus} className={`${status === 'All' ? "selected": ""}`} >All</a>
        </li>
        <li>
          <a href="#/active" onClick={toggleStatus} className={`${status === 'Active' ? "selected" : ""}`} >Active</a>
        </li>
        <li>
          <a href="#/completed" onClick={toggleStatus} className={`${status === "Completed" ? "selected" : ""}`} >Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer