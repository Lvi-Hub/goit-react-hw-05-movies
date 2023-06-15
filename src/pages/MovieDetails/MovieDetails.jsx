import { fetchMovieDetails } from '../../service/fetchApi';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Container,
  Img,
  Info,
  AddInfo,
  ItemLink,
  Message,
} from './MovieDetails.styled';
import BackLink from 'components/BackLink/BackLink';
import PropTypes from 'prop-types';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [moviesDatails, setMoviesDatails] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

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
      <BackLink to={backLinkHref.current}>Go Back</BackLink>
      {!title && <Message> No datailes about this movies!!! </Message>}
      {title && (
        <>
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
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </AddInfo>
        </>
      )}
    </>
  );
};

MoviesDetails.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string.isRequired,
  }),

  genres: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default MoviesDetails;
