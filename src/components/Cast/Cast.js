import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/fetch-movies';
import { BASE_IMG_URL } from 'utils/fetch-movies';
import { CastItem, CastList, CastName } from './Cast.styled';
import placeholder from '../../images/person-placeholder.jpg';

export default function Casts() {
  const type = 'casts';
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCast = async () => {
      try {
        setIsLoading(false);
        const castList = await (await getMovieDetails(type, movieId)).data.cast;
        setCasts(castList);
      } catch {
        setError(true);
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <>
      {casts.length === 0 && !error && !isLoading ? (
        <p>I'm sorry, but we didn't find anything.</p>
      ) : (
        <CastList>
          {casts.map(({ name, character, profile_path, cast_id }) => {
            return (
              <CastItem key={cast_id}>
                <img
                  src={profile_path ? BASE_IMG_URL + profile_path : placeholder}
                  alt={name + ' photo'}
                />
                <CastName>
                  <p>
                    <b>{name}</b>
                  </p>
                  {character && (
                    <p>
                      <b>Character: </b>
                      {character}
                    </p>
                  )}
                </CastName>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </>
  );
}
