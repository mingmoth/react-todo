import Todo from './Todo'

function Todos({ todos, setTodos, filterTodos, toggleAll, setToggleAll, editTodo, setEditTodo }) {
  const toggleAllTodos = () => {
    setToggleAll(!toggleAll)
  }
  
  return (
    <main className="main">
      <input id="toggle-all" type="checkbox" className="toggle-all" onClick={toggleAllTodos}/>
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {filterTodos.map(todo => (
          <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        ))}

      </ul>
    </main>
  )
}

export default Todos