
export function sortMovies({movies}){
    return movies.sort((firstMovie, secondMovie) => firstMovie.localeCompare(secondMovie))
}