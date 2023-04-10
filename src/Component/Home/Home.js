import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';

export default function Home (){
    
    const [trendingMovie, setTrendingMovie] = useState([]);
    
    async function getTrendingMovie() {

        const url = process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/trending`);
        // console.log(response);
        const movieData = await response.json();
        console.log(movieData);  
        setTrendingMovie(movieData);
        console.log(trendingMovie);

    }

    function commentHandler(newMovie , id){
        trendingMovie.map(x=>{
            if(x.id === id){ 
                x.comment = newMovie.userComment
                
                return x;
            }else{
                return x
            }
        })
    }
    
    useEffect(() => {
        getTrendingMovie()
    },[]);


 return(
    <>
    
    <MovieList movies={trendingMovie} commentHandler={commentHandler}/>
    </>
 )
}