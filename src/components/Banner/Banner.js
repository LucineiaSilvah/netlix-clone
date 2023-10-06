import React, { useEffect, useState } from "react";
import "./Banner.css";
import categorias, { getMovies } from "../../api";
const Banner = () => {
  const [movie, setMovie] = useState({});
  const fetcRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categorias.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOriginalsCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (e) {
      console.log("Erro Banner", e);
    }
  };
  useEffect(() => {
    fetcRandomMovie();
  }, []);
  return (<>
  
  <header
      className="banner-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-titulo">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-button-container">
          <button className="banner-button">
            Assistir
          </button>
          <button className="banner-button">
Minha lista
          </button>
        </div>
        <div className="banner-descricao">
          <h2>{movie?.overview}</h2>
        </div>
      </div>
    </header>
  
  
  </>
  );
};

export default Banner;
