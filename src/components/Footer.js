function Footer({ todos, setStatus }) {
  const toggleStatus = (e) => {
    setStatus(e.target.text)
  }
  return (
    <footer className="footer">
      <span className="todo-count"> <strong> {todos.length} </strong> items left </span>
      <ul className="filters">
        <li>
          <a href="#/all" onClick={toggleStatus}>All</a>
        </li>
        <li>
          <a href="#/active" onClick={toggleStatus}>Active</a>
        </li>
        <li>
          <a href="#/completed" onClick={toggleStatus}>Completed</a>
        </li>
      </ul>
      <button className="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

export default Footer