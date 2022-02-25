import Todo from './Todo'

function Todos({ todos, setTodos }) {
  return (
    <main className="main">
      <input id="toggle-all" type="checkbox" className="toggle-all" />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}

      </ul>
    </main>
  )
}

export default Todos