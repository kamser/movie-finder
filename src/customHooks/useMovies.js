import validMovieResponse from '../../mocks/validMovieResponse.json'
import movieNotFoundResponse from '../../mocks/movieNotFoundResponse.json'

export function useMovies({search, sort}){

    const getMoviesLocally = () => {
        const movies = validMovieResponse.Search

        return movies?.map((movie) => {
            return {
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                image: movie.Poster
            }
        })
    }
    

    return { movies: getMoviesLocally() }
}