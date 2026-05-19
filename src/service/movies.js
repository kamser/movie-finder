import { BASE_MOVIES_URL } from "../utils/constants"
export async function fetchMovies({search}){
    
    if(search && search === '') return null

    try {   
    
        const response = await fetch( `${BASE_MOVIES_URL}${search}`,
                                        {
                                            method: "GET"
                                        }
                                    )
        const data = await response.json()
        
        const newMovies = data.Search
        
        const mappedMovies = newMovies?.map((movie) => {
            return {
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                image: movie.Poster
            }
        })

        return mappedMovies

    } catch (error) {
        throw new Error('There was something wrong with the response')
    }


}