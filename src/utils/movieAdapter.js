
export function movieMapper({movies}){
    return movies.map((movie) => {
        return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster
        }
    })
}