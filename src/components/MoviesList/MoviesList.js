import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { BASE_IMG_URL } from 'utils/fetch-movies';
import { MoviesItem, MoviesListUl, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesListUl>
      {movies.map(({ id, title, backdrop_path, poster_path }) => {
        return (
          <MoviesItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? BASE_IMG_URL + poster_path
                    : BASE_IMG_URL + backdrop_path
                }
                alt={`Poster: ${title}`}
              />
              <span>{title}</span>
            </StyledLink>
          </MoviesItem>
        );
      })}
    </MoviesListUl>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
