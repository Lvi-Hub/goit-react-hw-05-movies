import { fetchCast } from 'Service/fetchApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Img } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [Cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId)
      .then(data => {
        console.log(data);
        setCast(data);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);
  const { cast } = Cast;
  return (
    <Container>
      <ul>
        {cast?.map(({ id, name, profile_path }) => (
          <li key={id}>
            <Img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt=""
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Cast;
