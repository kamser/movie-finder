import validMovieResponse from '../../mocks/validMovieResponse.json'
import movieNotFoundResponse from '../../mocks/movieNotFoundResponse.json'

export function useMovies(){
    const movies = validMovieResponse.Search

    const mappedMovies = movies?.map((movie) => {
        return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster
        }
    })

    return { movies: mappedMovies }
}