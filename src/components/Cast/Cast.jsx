import { fetchCast } from '../../Service/fetchApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Img, ItemList } from './Cast.styled';
import PropTypes from 'prop-types';
//--
const Cast = () => {
  const { movieId } = useParams();
  const [Cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId)
      .then(data => {
        // console.log(data);
        setCast(data);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);
  const { cast } = Cast;
  return (
    <Container>
      <ItemList>
        {cast?.map(({ id, name, profile_path }) => (
          <li key={id}>
            <Img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt=""
            />
            <p>{name}</p>
          </li>
        ))}
      </ItemList>
    </Container>
  );
};

Cast.propTypes = {
  cast: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};

export default Cast;
