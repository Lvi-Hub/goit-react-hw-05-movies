import React, { useState, useEffect } from 'react';
import { fetchTrending } from '../../Service/fetchApi';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, List, Title } from './Home.styled';
//--
const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending()
      .then(data => {
        setTrendingList(data.results);
      })
      .catch(error => console.log(error.message));
  }, []);
  return (
    <Container>
      <Title>Trending today</Title>
      <List>
        {trendingList?.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
};

Home.propTypes = {
  trendingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
