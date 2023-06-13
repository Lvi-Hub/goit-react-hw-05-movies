import { fetchMovieDetails } from 'Service/fetchApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [moviesDatails, setMoviesDatails] = useState([]);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => {
        // console.log(data);
        setMoviesDatails(data);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);
  console.log(moviesDatails);
  const { title, poster_path, vote_average, overview, genres } = moviesDatails;
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      <p>{title}</p>
      <p>User score: {Math.round((vote_average * 100) / 10) || ''}%</p>
      <p>Overview</p>
      <p>{overview}</p>
      <p>Genres</p>
      <ul>
        {genres?.map(({ id, name }) => (
          <li key={id}> {name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesDetails;
