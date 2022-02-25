function Todos() {
  return (
    <main className="main">
      <input id="toggle-all" type="checkbox" className="toggle-all" />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        <li className="todo">
          <div className="view">
            <input type="checkbox" className="toggle" />
            <label htmlFor="">學習 Vue Template</label>
            <button className="destroy"></button>
          </div>
          <input type="text" className="edit" />
        </li>
      </ul>
    </main>
  )
}

export default Todos