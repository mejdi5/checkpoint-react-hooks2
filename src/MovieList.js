import React from 'react';
import MovieCard from './MovieCard';



function MovieList({movies, text, rating}) {
    return (
        <div>
        {movies.filter(el => el.title.toLowerCase().includes(text.toLowerCase()) && el.rate >= rating).map(el => <MovieCard key={el.id} el={el}/>)}

        </div>
    )
}

export default MovieList
