import './App.css'
import validMovieResponse from '../mocks/validMovieResponse.json'

function App() {
  const hasMovies = validMovieResponse.Search !== null
  const movies = hasMovies
                  ? validMovieResponse.Search
                  : null

  return (
    <>
      <h1>Best Movie Finder</h1>
      <header>
        <form action="">
          <input name="userQuery" type="text" placeholder='Avengers, Matrix, Titanic, Avatar...'/>
          <button type='sumbit'>Search</button>
        </form>
      </header>
      <main>
        <h2>Movies</h2>
        {hasMovies 
              ? movies.map((element) => (
                    <ul key={element.imdbID}>
                      <li>
                        <h3>{element.Title}</h3>
                        <p>{element.Year}</p>
                        <img src={element.Poster} alt={`Its an image from the movie ${element.Title}`}></img>
                      </li>
                    </ul>
                  )
                )
              :
              <p>No movies found</p>
        }
      </main>
    </>
  )
}

export default App
