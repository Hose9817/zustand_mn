import { useState } from "react";
import { useTodos } from "./store";

const TodoController = () => {
  const [newTitle, setNewTitle] = useState("");

  const addTodo = useTodos((state) => state.addTodo);

  const createBtnHandler = () => {
    addTodo(newTitle);
    setNewTitle("");
  };

  return (
    <div>
      <label htmlFor="">
        New Title:
        <input
          placeholder="type here..."
          type="text"
          autoFocus
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && createBtnHandler()}
        />
      </label>
      <br />
      <br />

      <button onClick={createBtnHandler}>Create new Todo</button>
    </div>
  );
};

export default TodoController;
