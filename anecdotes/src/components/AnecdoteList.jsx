import { useAnecdotes, useAnecdotesActions, useFilterQuery } from "../store";

function AnecdoteList() {
  const anecdotes = useAnecdotes();
  const { vote } = useAnecdotesActions();
  const filterQuery = useFilterQuery();

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filterQuery.toLowerCase()),
  );

  const sortAnecdotes = (filteredAnecdotes) => {
    return filteredAnecdotes.toSorted((a, b) => b.votes - a.votes);
  };

  const sortedAnecdotes = sortAnecdotes(filteredAnecdotes);

  return (
    <>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} votes
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnecdoteList;
