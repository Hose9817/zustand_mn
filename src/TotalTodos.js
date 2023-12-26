import { useTodos } from "./store";

const TotalTodos = () => {
  const count = useTodos((state) => state.todos.length);

  return <h3>Total: {count}</h3>;
};

export default TotalTodos;
