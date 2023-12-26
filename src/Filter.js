import { useFilters } from "./store.js";

const Filter = () => {
  const { filter, setFilter } = useFilters();

  return (
    <div>
      <button disabled={filter === "all"} onClick={() => setFilter("all")}>
        All
      </button>

      <button
        disabled={filter === "completed"}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>

      <button
        disabled={filter === "uncompleted"}
        onClick={() => setFilter("uncompleted")}
      >
        Not completed
      </button>

      <br />
      <br />
    </div>
  );
};

export default Filter;
