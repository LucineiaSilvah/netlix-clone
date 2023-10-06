const API_KEY = "79a805da42ac66fb88f6136261de4911";

const categorias = [
  {
    isLarge: true,
    name:"trending",
    title: "Em Alta",
    path:`/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    isLarge: false,
    name:"netflixOriginals",
    title: "Originais Netflix",
    path:`/discover/tv/?api_key=${API_KEY}&with_networks=213`,
  },
  
  {
    isLarge: false,
    name:"topRated",
    title: "Populares",
    path:`/movie/top_rated/?api_key=${API_KEY}&&language=pt-BR`,
    
  },
  
  {
    isLarge: false,
    name:"comedy",
    title: "Comédias",
    path:`/discover/tv/?api_key=${API_KEY}&with_genres=35`,
    
  },
  
  {
    isLarge: false,
    name:"romances",
    title: "Romances",
    path:`/discover/tv/?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    isLarge: false,
    name:"documentaries",
    title: "Documentarios",
    path:`/discover/tv/?api_key=${API_KEY}&with_genres=99`,
  },
]
export const getMovies = async (path)=>{
   let url = `https://api.themoviedb.org/3/${path}`
   try{
    const response = await fetch(url)
    return await response.json()
 
  }catch(error){
    console.log("erro",error);
  }
}
export default categorias