import Todo from "./Todo.js";
import TodoController from "./TodoController.js";
import TotalTodos from "./TotalTodos.js";
import { useTodos, useFilters } from "./store.js";
import Filter from "./Filter.js";
import FetchTodos from "./FetchTodos.jsx";

const App = () => {
  const filter = useFilters((state) => state.filter);
  const todos = useTodos((state) => {
    switch (filter) {
      case "completed":
        return state.todos.filter((todo) => todo.completed);
      case "uncompleted":
        return state.todos.filter((todo) => !todo.completed);
      default:
        return state.todos;
    }
  });

  return (
    <div>
      <Filter />

      <TodoController />

      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}

      <TotalTodos />
      <FetchTodos />
    </div>
  );
};

export default App;
