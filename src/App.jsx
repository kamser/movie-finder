import { useState, useEffect, useRef } from 'react'

import './App.css'
import { Movies } from './components/Movies'
import { SearchErrors } from './components/SearchErrors'

import { useMovies } from './customHooks/useMovies'
import { validateSearch } from '../validator/search'

function App() {

  const [sort, setSort] = useState(false)
  const [userSearch, setUserSearch] = useState('')
  const [searchError, setSearchError] = useState([])
  const {movies} = useMovies({search: userSearch, sort})
  const firstTime = useRef(true)

  const handleOnSumbit = (event) => {
    event.preventDefault()
  }

  const handleOnChange = (event) => {
    const currentValue = event.target.value
    setUserSearch(currentValue)
  }

  useEffect(()=> {
    if(firstTime.current){
      firstTime.current = userSearch === ''
      return
    }

    const validatorResult = validateSearch({userSearch})

    if(validatorResult.success) {
      setSearchError([])
      return
    }

    const newIssues = validatorResult.error.issues.map( (issue) => issue.message)

    console.log(newIssues)

    setSearchError([...newIssues])

  }, [userSearch])


  const handleOnCheckboxChange = (event) => {
    if(event.target.checked) setSort(event.target.checked)
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
          <label htmlFor="sortOption">Sort Movies</label>
          <input id="sortOption" type='checkbox' onChange={handleOnCheckboxChange}></input>
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
