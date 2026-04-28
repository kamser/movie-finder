import { useState } from 'react'

import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './customHooks/useMovies'

function App() {

  const [userSearch, setUserSearch] = useState('')
  const {movies} = useMovies()

  const handleOnSumbit = (event) => {
    event.preventDefault()
  }

  const handleOnChange = (event) => {
    const currentValue = event.target.value
    if(currentValue === ' ') return

    setUserSearch(currentValue)
  }

  return (
    <>
      <h1>Best Movie Finder</h1>
      <header>
        <form action="" onSubmit={handleOnSumbit}>
          <input 
            name="userQuery" 
            type="text" 
            placeholder='Avengers, Matrix, Titanic, Avatar...'
            value={userSearch}
            onChange={handleOnChange}/>
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}></Movies>
      </main>
    </>
  )
}

export default App
