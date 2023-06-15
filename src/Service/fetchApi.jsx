const URL = 'https://api.themoviedb.org/3';
const api_key = '481cbb6dba5121edc01136f73aa6b3c6';
//
//--
export function fetchTrending() {
  const urlTrending = `${URL}/trending/all/day?api_key=${api_key}`;
  return fetch(urlTrending).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Can´t find tranding films'));
  });
}
//--
export function fetchMovieDetails(moviesID) {
  const urlMoviesDetails = `${URL}/movie/${moviesID}?api_key=${api_key}`;
  return fetch(urlMoviesDetails).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Can´t find tranding films'));
  });
}
//--

export function fetchCast(moviesID) {
  const urlCast = `${URL}/movie/${moviesID}/credits?api_key=${api_key}`;
  return fetch(urlCast).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Can´t find tranding films'));
  });
}

//-- https://api.themoviedb.org/3/movie/{movie_id}/reviews
export function fetchReviews(moviesID) {
  const URLReviews = `${URL}/movie/${moviesID}/reviews?api_key=${api_key}`;
  return fetch(URLReviews).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Can´t find tranding films'));
  });
}

//-- https://api.themoviedb.org/3/search/movie
export function fetchSearch(SearchName) {
  const URLReviews = `${URL}/search/movie?api_key=${api_key}&query=${SearchName}`;
  return fetch(URLReviews).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Can´t find tranding films'));
  });
}
