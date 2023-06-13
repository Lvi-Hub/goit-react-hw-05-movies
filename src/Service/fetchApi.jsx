import PropTypes from 'prop-types';
const URL = 'https://api.themoviedb.org/3';
const api_key = '481cbb6dba5121edc01136f73aa6b3c6';
const page = 1;

export function fetchTrending() {
  const options = new URLSearchParams({
    api_key,
    page,
  });
  const urlTrending = `${URL}/trending/all/day?${options}`;
  return fetch(urlTrending).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Can´t find tranding films'));
  });
}

export function fetchMovieDetails(moviesID) {
  // return fetch(`${URL}/movie/${movieId}?api_key=${APIKEY}`).
  const urlMoviesDetails = `${URL}/movie/${moviesID}?api_key=${api_key}`;
  return fetch(urlMoviesDetails).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Can´t find tranding films'));
  });
}

//------
fetchTrending.propTypes = {
  name: PropTypes.string.isRequired,
  searchName: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
  Page: PropTypes.number.isRequired,
};
