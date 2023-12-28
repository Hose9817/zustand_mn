import { useTodos } from "./store";
// import { shallow } from 'zustand/shallow'

const FetchTodos = () => {
  const { error, fetchTodos } = useTodos((state) => ({
    error: state.error,
    fetchTodos: state.fetchTodos,
  }));
  console.log("render fetchTodos...");

  return (
    <button onClick={fetchTodos}>{!error ? "Get todos" : { error }}</button>
  );
};

export default FetchTodos;
