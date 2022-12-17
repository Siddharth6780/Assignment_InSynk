import React, { useState } from 'react'
import '../App.css';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalBody,
} from 'mdb-react-ui-kit';

const MovieContainer = (movie) => {
    const [scrollableModal, setScrollableModal] = useState(false);
    var movie_name = movie.movie.original_title;
    if (movie_name === undefined) {
        movie_name = movie.movie.name;
    }
    var rating = Math.round(movie.movie.vote_average * 10) / 10;
    var dateObj = new Date(movie.movie.release_date);
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    const arr = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var finalDate = "Not available";
    if (!isNaN(day)) {
        finalDate = day + " " + arr[month - 1] + ", " + year;
    }
    return (
        <>
            <div onClick={() => setScrollableModal(!scrollableModal)}>
                <div className='movie-list'>
                    <div className="tag">{rating}</div>
                    <img src={"https://image.tmdb.org/t/p/original" + movie.movie.poster_path} alt='movie' className='movie-img'></img>
                    <p className='imgTitle'>{movie_name}</p>
                </div>
            </div>


            <MDBModal show={scrollableModal} setShow={setScrollableModal}>
                <MDBModalDialog size='lg'>
                    <MDBModalContent>
                        <MDBModalBody>

                            <div className="movie-card">

                                <div className="movie-right">
                                    <img src={"https://image.tmdb.org/t/p/original" + movie.movie.poster_path} alt='movie' className='modal-img' />
                                </div>

                                <div className="movie-left">
                                    <div className="movie-header">
                                        <div className="movie-title">{movie_name}</div>
                                    </div>
                                    <div className="movie-release-date"><b>Release date: </b>{finalDate}</div>
                                    <div className="modal-desc">{movie.movie.overview}</div>
                                    <div className="movie-rating"><span>&#9733;</span> <b>{rating}</b> / 10 ({movie.movie.vote_count} total votes)</div>
                                </div>
                            </div>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}

export default MovieContainer