import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getMovies } from 'utils/fetch-movies';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const type = 'trending';

  useEffect(() => {
    const getTrending = async () => {
      setTrending(await (await getMovies(type)).data.results);
    };

    getTrending();
  }, []);

  return (
    <>
      <h1>Todays trending:</h1>
      <MoviesList movies={trending} />
    </>
  );
}
