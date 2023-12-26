import { useTodos } from "./store";

const Todo = ({ id, title, completed }) => {
  const toggleTodo = useTodos(state => state.toggleTodo);
  const removeTodo = useTodos(state => state.removeTodo);

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <span>
        <b>{title}</b>
      </span>
      <button onClick={() => removeTodo(id)}>Delete</button>
      <hr />
    </div>
  );
};

export default Todo;
