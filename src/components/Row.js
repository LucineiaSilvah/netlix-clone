import React, { useEffect, useState } from 'react';
import { getMovies } from '../api';
import './Row/Row.css'
const imageHost ='https://image.tmdb.org/t/p/original/'
function Row({title, path,isLarge}){
  const [movie, setMovies] = useState([]);
  const fetcMovies = async (_path)=>{
    try{
    const data= await getMovies(_path)
    setMovies(data?.results)
    }catch (e){
      console.log("movies erro",e);
    }
  }
  useEffect(()=>{
fetcMovies(path)
  
  },[path])
  return (
    <div className='row-container'>
      <h2 className='row-header'>{title}</h2>
      <div className='row-card'>
        {movie?.map(movie =>{
          return <img
          className={`movie-card  ${isLarge && 'movie-card-large'  }` }
          key={movie.id}
          src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`} alt={movie.name}/>
        })}
      </div>
    </div>
  );
}

export default Row;
