import Todo from './Todo'

function Todos({ todos, setTodos, filterTodos, toggleAll, setToggleAll, activeTodos, editTodo, setEditTodo }) {
  const toggleAllTodos = (e) => {
    setToggleAll(!toggleAll)
    setTodos(
      todos.map(todo => {
        return {
          ...todo,
          completed: !toggleAll
        }
      })
    )
  }
  
  return (
    <main className="main">
      {todos.length ? <input id="toggle-all" type="checkbox" className="toggle-all" onChange={toggleAllTodos} checked={activeTodos === 0} />: null}
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