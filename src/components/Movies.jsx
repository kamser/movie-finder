import validMovieResponse from '../../mocks/validMovieResponse.json'
import movieNotFoundResponse from '../../mocks/movieNotFoundResponse.json'
import './Movies.css'

function ListOfMovies({movies}){
    return(
        <>
            <ul className='movies'>
            {
                movies.map((element) => ( 
                    <li key={element.imdbID}>
                    <h3>{element.Title}</h3>
                    <p>{element.Year}</p>
                    <img src={element.Poster} alt={`Its an image from the movie ${element.Title}`}></img>
                    </li>      
                  ))
            }
            </ul>
        </>  
    )
}

function NoMoviesFound({errorMessage}){
    return (
        <>
            <p>{errorMessage}</p>
        </>
    )
}

export function Movies(){
    const hasMovies = validMovieResponse.Search !== null
    const movies = hasMovies
                  ? validMovieResponse.Search
                  : null
    const errorMessage = movieNotFoundResponse.Error
    return(
        <>
            {
                hasMovies
                    ? <ListOfMovies movies={movies}></ListOfMovies>
                    : <NoMoviesFound errorMessage={errorMessage}></NoMoviesFound>
            }           
        </>
    )
}