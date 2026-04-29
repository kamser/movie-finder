import { useState, useEffect } from 'react'

import './App.css'
import { Movies } from './components/Movies'
import { SearchErrors } from './components/SearchErrors'

import { useMovies } from './customHooks/useMovies'
import { validateSearch } from '../validator/search'

function App() {

  const [userSearch, setUserSearch] = useState('')
  const [searchError, setSearchError] = useState([])
  
  const {movies} = useMovies()

  const handleOnSumbit = (event) => {
    event.preventDefault()
  }

  const handleOnChange = (event) => {
    const currentValue = event.target.value
    console.log(currentValue)
    setUserSearch(currentValue)
  }

  useEffect(()=> {
    const validatorResult = validateSearch({userSearch})

    if(validatorResult.success) {
      setSearchError([])
      return
    }

    const newIssues = validatorResult.error.issues.map( (issue) => issue.message)

    console.log(newIssues)

    setSearchError([...newIssues])

  }, [userSearch])

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
        <SearchErrors errors={searchError}></SearchErrors>
      </header>
      <main>
        <Movies movies={movies}></Movies>
      </main>
    </>
  )
}

export default App
