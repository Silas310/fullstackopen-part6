import { useAnecdotesActions } from "../store";

function FilterInput() {
  const { setFilterQuery } = useAnecdotesActions();

  const handleChange = (e) => {
    setFilterQuery(e.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <input
        id="filter"
        placeholder="Filter anecdotes"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default FilterInput;
