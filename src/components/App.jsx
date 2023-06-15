import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Layout = lazy(() => import('./Layout/Layout'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="Cast" element={<Cast />} />
          <Route path="Reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
