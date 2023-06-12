import PropTypes from 'prop-types';

export function fetchTrending() {
  const api_key = '481cbb6dba5121edc01136f73aa6b3c6';
  const page = 1;

  const searchParams = new URLSearchParams({
    api_key,
    page,
  });

  const urlTrending = `https://api.themoviedb.org/3/trending/all/day?${searchParams}`;

  return fetch(urlTrending).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Can´t find tranding films'));
  });
}

fetchTrending.propTypes = {
  name: PropTypes.string.isRequired,
  searchName: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
  Page: PropTypes.number.isRequired,
};
