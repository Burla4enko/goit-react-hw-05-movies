import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BASE_IMG_URL } from 'utils/fetch-movies';
import { Article, MovieInfo, MovieInfoTitle } from './MoviePage.styled';
import { StyledNavLink } from 'components/Header/Header.styled';
import { getMovieById } from 'utils/fetch-movies';
import { Suspense, useEffect, useState } from 'react';
import { NotFound } from 'pages/NotFound/NotFound';

export default function MoviePage() {
  const placeholder =
    'https://mbfn.org/wp-content/uploads/2020/09/image-coming-soon-placeholder.png';
  const location = useLocation();
  const [backUrl, setBackUrl] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState([]);
  const [overview, setOverview] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    location.state && setBackUrl(() => location.state.from);
  }, [location]);

  useEffect(() => {
    setIsLoading(true);
    const getMovieInfo = async () => {
      try {
        const movieInfo = await (await getMovieById(movieId)).data;
        const { poster_path, title, vote_average, genres, overview } =
          movieInfo;
        setError(false);
        setIsLoading(false);
        setImgUrl(poster_path);
        setTitle(title);
        setRating(vote_average.toFixed(2));
        setOverview(overview);
        setGenres(() =>
          genres.map(genre => genre.name.toLowerCase()).join(', ')
        );
      } catch {
        setError(true);
        setIsLoading(false);
      }
    };

    getMovieInfo();
  }, [movieId]);

  return (
    <>
      {error && !isLoading ? (
        <NotFound />
      ) : (
        <Article>
          <StyledNavLink to={backUrl}>Back</StyledNavLink>
          <MovieInfo>
            <img
              src={imgUrl ? BASE_IMG_URL + imgUrl : placeholder}
              alt={`Poster: ${title}`}
            />
            <div>
              <h2>{title}</h2>
              <p>
                <MovieInfoTitle>User score: </MovieInfoTitle>
                <span>{rating}</span>
              </p>
              <p>
                <MovieInfoTitle>Overviev: </MovieInfoTitle>
                <span>{overview}</span>
              </p>

              <p>
                <MovieInfoTitle>Genres: </MovieInfoTitle>
                <span>{genres}</span>
              </p>
            </div>
          </MovieInfo>
          <div>
            <p>
              <b>Additional information</b>
            </p>
            <ul>
              <li>
                <Link to="cast"> Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Article>
      )}
    </>
  );
}
