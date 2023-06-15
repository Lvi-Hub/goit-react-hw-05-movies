import React, { Suspense, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TbSearch } from 'react-icons/tb';
import { fetchSearch } from 'Service/fetchApi';
import { Container, List, SubmitForm } from './Movie.styled';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchName, setSearchName] = useState('');
  const [recieveData, setRecieveData] = useState('');

  const name = searchParams.get('name') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    if (searchName !== '') {
      setSearchParams(searchName);
    }
  };

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchName(nextParams);
  };

  useEffect(() => {
    fetchSearch(name)
      .then(data => {
        setRecieveData(data);
      })
      .catch(error => console.log(error.message));
  }, [name]);

  const { results } = recieveData;

  return (
    <Container>
      <div>
        <SubmitForm onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={e => updateQueryString(e.target.value)}
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
