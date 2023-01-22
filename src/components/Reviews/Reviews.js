import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/fetch-movies';

export default function Reviews() {
  const type = 'reviews';
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getReviews = async () => {
      try {
        setIsLoading(false);
        const reviewsList = await await (
          await getMovieDetails(type, movieId)
        ).data.results;
        setReviews(reviewsList);
      } catch {
        setError(true);
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 && !error && !isLoading ? (
        <p>I'm sorry, but we didn't find anything.</p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>
                  <b>Author: {author}</b>
                </p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
