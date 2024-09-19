import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from './MovieCard'
import './App.css'
import SearchIcon from './search.svg'

const API_URL='http://www.omdbapi.com/?apikey=7ef4942a';

function app(){
    const[movies,setMovies]=useState([]);
    const[searchTerm,setSearchTerm]=useState('');

    const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`)
        const data=await response.json();
        console.log(data);
        setMovies(data.Search);
    }
    useEffect(()=>{
       searchMovies('spiderman')
    },[])
    return (
        <div className="app">
            <h1>movieland</h1>
            <div className="search">
                <input
                placeholder="search for movies"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}/>
                <img
                src={SearchIcon}
                alt="search"
                onClick={()=> searchMovies(searchTerm)}/>
            </div>
            <div>
                {movies.length > 0 ? (
                    <div className="container">
                        {movies.map((movies, index) => (
                            <MovieCard key={index} movies={movies} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
            </div>
        </div>
     );
        
    
}
export default app;



