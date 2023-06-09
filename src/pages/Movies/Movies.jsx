import React, { Suspense, useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TbSearch } from 'react-icons/tb';
import { fetchSearch } from 'Service/fetchApi';
import { Container, List, SubmitForm } from './Movie.styled';
//--
const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [recieveData, setRecieveData] = useState('');
  const [error, setError] = useState(false);

  const name = searchParams.get('name') ?? '';
  const [searchName, setSearchName] = useState(name);

  const handleSubmit = e => {
    e.preventDefault();
    if (name !== '') {
      setSearchName(name);

      console.log(searchName);
    }
  };

  useEffect(() => {
    if (searchName !== '') {
      fetchSearch(searchName, setError)
        .then(data => {
          setRecieveData(data);
        })
        .catch(error => {
          setError(true);
          console.log(error.message);
        });
    }
  }, [searchName]);

  const { results } = recieveData;

  return (
    <Container>
      {error && <Navigate to="/movies" replace={true} />}
      <div>
        <SubmitForm onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={e => setSearchParams({ name: e.target.value })}
          />
          <button type="submit">
            <TbSearch />
            <span>Search</span>
          </button>
        </SubmitForm>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          {results && (
            <List>
              {results.map(({ id, title, name }) => (
                <li key={id}>
                  <Link to={`/movies/${id}`} state={{ from: location }}>
                    {title || name}
                  </Link>
                </li>
              ))}
            </List>
          )}
        </div>
      </Suspense>
    </Container>
  );
};

fetchSearch.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default Movies;
