import { useAnecdotes, useAnecdotesActions } from "../store"


function AnecdoteList() {
  const anecdotes = useAnecdotes()
  const { vote } = useAnecdotesActions()


  return (
    <>
      {anecdotes.map((anecdote) => (
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