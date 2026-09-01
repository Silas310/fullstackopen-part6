import { useAnecdotesActions } from "../store"

function AnecdoteForm() {
  const { add } = useAnecdotesActions()


  const generateId = () => 
    Number((Math.random() * 1000000).toFixed(0))


  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value;
    add({ id: generateId(), content, votes: 0 });
    event.target.anecdote.value = '';
  }


  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div>
          <input name='anecdote' data-testid="new" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm