import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

// import Home from '../pages/Home/Home';
// import Movies from '../pages/Movies/Movies';
// import MoviesDetails from '../pages/MovieDetails/MovieDetails';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const Home = React.lazy(() => import('pages/Home/Home'));
const Movies = React.lazy(() => import('pages/Movies/Movies'));
const MoviesDetails = React.lazy(() =>
  import('pages/MovieDetails/MovieDetails')
);
const Cast = React.lazy(() => import('components/Cast/Cast'));
const Reviews = React.lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="Cast" element={<Cast />} />
          <Route path="Reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
