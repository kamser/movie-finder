import { useState } from 'react'

import validMovieResponse from '../../mocks/validMovieResponse.json'
import movieNotFoundResponse from '../../mocks/movieNotFoundResponse.json'
import {BASE_MOVIES_URL} from '../utils/constants.js'

export function useMovies({search, sort}){

    const [movies, setMovies] = useState([])
    
    // const getMoviesLocally = () => {
    //     const movies = validMovieResponse.Search

    //     return movies?.map((movie) => {
    //         return {
    //             id: movie.imdbID,
    //             title: movie.Title,
    //             year: movie.Year,
    //             image: movie.Poster
    //         }
    //     })
    // }

    const getMovies = () => {
        if(search && search !== ''){
            fetch( `${BASE_MOVIES_URL}${search}`,
                {
                    method: "GET"
                }
            )
            .then(response => response.json())
            .then(data => {
                const newMovies = data.Search

                const mappedMovies = newMovies?.map((movie) => {
                    return {
                        id: movie.imdbID,
                        title: movie.Title,
                        year: movie.Year,
                        image: movie.Poster
                    }
                })

                setMovies([...mappedMovies])
            })
        }
    }
    

    return { movies,  getMovies }
}