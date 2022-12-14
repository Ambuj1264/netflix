
import React, { useEffect, useState } from 'react';
import axios from './axios';
import './row.css';
 import Youtube from 'react-youtube';
 
import movieTrailer from 'movie-trailer';
const base_url='https://image.tmdb.org/t/p/original/'
const Row = ({ title, fetchUrl,isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const[trailerUrl,setTrailerUrl]=useState("")
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request)
            setMovies(request.data.results);
            // console.log(request.data.results)
            return request;

        }
        fetchData();
    }, [fetchUrl])

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
  // https://www.youtube.com/watch?v=XtMThy8QKqU&t
            autoplay:1,
        },
    }

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url=>{
                // https://www.youtube.com/watch?v=XtMThy8QKqU&t
                const urlParams=new URLSearchParams( new URL(url).search)
               setTrailerUrl( urlParams.get('v'));
             } ).catch(e=>console.log(e))
        }
    }
    // console.log(movies)
    return (


        <>
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie=>(
                   
                    <img id='img' onClick={()=>handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge" }` }key={movie.id}
                     src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt="moviesname" />
                ))}
            </div>
           {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>

           

        </>
    )
}

export default Row