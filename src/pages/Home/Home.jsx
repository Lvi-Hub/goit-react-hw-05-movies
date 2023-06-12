import React, { useState, useEffect } from 'react';
import { fetchTrending } from '../../Service/fetchApi';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending()
      .then(data => {})
      .catch(error => console.log(error.message));
  }, []);

  return (
    <ul>
      {trendingList.map(({ id, title, name }) => {
        if (title) {
          return (
            <li key={id}>
              <Link state={{ from: location }} to={`movies/${id}`}>
                {title}
              </Link>
            </li>
          );
        }

        return (
          <li key={id}>
            <Link state={{ from: location }} to={`movies/${id}`}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
