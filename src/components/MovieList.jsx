import React, { useEffect} from 'react'
import { fetchMovies } from '../services/API'
import { useDispatch,useSelector } from 'react-redux'


function MovieList() {
const dispatch = useDispatch
const movies = useSelector((state) => state.movies);
  useEffect(() => {dispatch
  (fetchMovies())
},[]
)
  return ( <>
    <h1>MovieList</h1>
    <h2>{movies.title}</h2>

    
    
    
    </>
  )
}

export default MovieList