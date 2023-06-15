import React, { useState, useEffect } from 'react';
import { fetchTrending } from '../../Service/fetchApi';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    <div>
      <div>Trending today</div>
      <ul>
        {trendingList?.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
