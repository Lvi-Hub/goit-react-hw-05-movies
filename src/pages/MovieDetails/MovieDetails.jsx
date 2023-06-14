import { fetchMovieDetails } from 'Service/fetchApi';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Container, Img, Info, AddInfo, ItemLink } from './MovieDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [moviesDatails, setMoviesDatails] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => {
        // console.log(data);
        setMoviesDatails(data);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);
  // console.log(moviesDatails);
  const { title, poster_path, vote_average, overview, genres } = moviesDatails;
  return (
    <>
      <BackLink to={backLinkHref}>Go Back</BackLink>
      <Container>
        <Img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title}`}
        />
        <Info>
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
        </Info>
      </Container>
      <AddInfo>
        <h2>Aditional information</h2>
        <ul>
          <li>
            <ItemLink to="Cast">Cast</ItemLink>
          </li>
          <li>
            <ItemLink to="Reviews">Reviews</ItemLink>
          </li>
        </ul>
        <Outlet />
      </AddInfo>
    </>
  );
};

export default MoviesDetails;
