import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export const useTodos = create(
  devtools(
    persist(
      (set, get) => ({
        todos: [
          { id: uuidv4(), title: "first Todo", completed: true },
          { id: uuidv4(), title: "second Todo", completed: false },
        ],
        loading: false,
        error: null,
        addTodo: (title) =>
          set((state) => {
            const newTodo = {
              id: uuidv4(),
              title,
              completed: false,
            };
            return { todos: [...state.todos, newTodo] };
          }),
        removeTodo: (todoId) =>
          set({
            todos: get().todos.filter((todo) => todo.id !== todoId),
          }),
        toggleTodo: (todoId) =>
          set({
            todos: get().todos.map((todo) =>
              todo.id === todoId
                ? { ...todo, completed: !todo.completed }
                : todo
            ),
          }),
        fetchTodos: async () => {
          set({ loading: true });
          try {
            const res = await fetch(
              "https://jsonplaceholder.typicode.com/todos?_limit=10"
            );
            if (!res.ok) throw new Error("Faild to fetch! Try again.");
            const newTodos = await res.json();
            set((state) => ({
              todos: [...state.todos, ...newTodos],
              error: null,
            }));
          } catch (error) {
            set({ error: error.message });
          } finally {
            set({ loadin: false });
          }
        },
      }),
      //persist doesn't work without this obj: (my case...)
      { name: "todoStore", version: 1 }
    )
  )
);

export const useFilters = create((set) => ({
  filter: "all",
  setFilter: (value) => set({ filter: value }),
}));
