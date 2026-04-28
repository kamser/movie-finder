import movieNotFoundResponse from '../../mocks/movieNotFoundResponse.json'
import './Movies.css'

function ListOfMovies({movies}){
    return(
        <>
            <ul className='movies'>
            {
                movies.map((element) => ( 
                    <li key={element.id}>
                    <h3>{element.title}</h3>
                    <p>{element.year}</p>
                    <img src={element.image} alt={`Its an image from the movie ${element.Title}`}></img>
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

export function Movies({movies}){
    const hasMovies = movies && movies.length > 0
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