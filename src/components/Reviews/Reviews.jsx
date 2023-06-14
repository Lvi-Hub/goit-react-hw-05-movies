import { fetchReviews } from 'Service/fetchApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ItemList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [MovReviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId)
      .then(data => {
        console.log(data);
        setReviews(data);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);
  const { results } = MovReviews;
  return (
    <Container>
      <ItemList>
        {results?.map(({ id, author, content }) => (
          <li key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ItemList>
    </Container>
  );
};

export default Reviews;
