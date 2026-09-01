import { useAnecdotes, useAnecdotesActions } from "../store"


function AnecdoteList() {
  const anecdotes = useAnecdotes()
  const { vote } = useAnecdotesActions()

  const sortAnecdotes = (anecdotes) => {
    return anecdotes.toSorted((a, b) => b.votes - a.votes);
  }

  const sortedAnecdotes = sortAnecdotes(anecdotes);


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

export default AnecdoteList