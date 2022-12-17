import React, { useEffect, useState } from 'react'
import MovieContainer from './MovieContainer';

const MovieList = (props) => {
    const [movieData, setMovieData] = useState([]);
    async function getMovieList() {
        let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data) {
                setMovieData(data.results);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    async function getSearchMovieList() {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${props.searchValue}&page=1&include_adult=false`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data) {
                setMovieData(data.results);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        if (props.searchValue !== '') {
            getSearchMovieList();
        }
        else {
            getMovieList();
        }
    }, [props.searchValue]);

    return (
        <div className='MovieContainer'>
            <div className='d-flex flex-wrap m-3'>
                {movieData.map((ele) => {
                    return (
                        <MovieContainer
                            movie={ele}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MovieList