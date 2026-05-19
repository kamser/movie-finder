import { useState, useEffect, useRef } from 'react'

import './App.css'
import { Movies } from './components/Movies.jsx'
import { SearchErrors } from './components/SearchErrors.jsx'

import { useMovies } from './customHooks/useMovies.js'
//import { validateSearch } from '../validator/search'
import { useSearch } from './customHooks/useSearch.js'



function App() {

  const [sort, setSort] = useState(false)
  const {search, updateSearch, errors} = useSearch()
  const {movies, getMovies} = useMovies({search: search, sort})

  const handleOnSumbit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleOnChange = (event) => {
    const currentValue = event.target.value
    updateSearch(currentValue)
  }

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
            value={search}
            onChange={handleOnChange}/>
          <label htmlFor="sortOption">Sort Movies</label>
          <input id="sortOption" type='checkbox' onChange={handleOnCheckboxChange}></input>
          <button type='submit'>Search</button>
        </form>
        <SearchErrors errors={errors}></SearchErrors>
      </header>
      <main>
        <Movies movies={movies}></Movies>
      </main>
    </>
  )
}

export default App
