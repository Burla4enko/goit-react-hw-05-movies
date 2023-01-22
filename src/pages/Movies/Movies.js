import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getMovies } from 'utils/fetch-movies';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const type = 'search';

  useEffect(() => {
    const title = searchParams.get('title') ?? '';
    title && setQuery(title);
  }, [searchParams]);

  useEffect(() => {
    const searchMovies = async () => {
      const newMovies = await (await getMovies(type, query)).data.results;
      if (newMovies.length === 0) {
        return toast.error('WTF?');
      }
      setMovies(newMovies);
    };
    query && searchMovies();
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();

    const formQuery = e.target.elements.search.value.toLowerCase().trim();

    if (formQuery.length === 0) {
      return toast.error('Please, enter something.');
    }

    if (formQuery === query) {
      return toast.error('Please, enter something else...');
    }

    setMovies([]);
    setQuery(formQuery);
    formQuery && setSearchParams({ title: formQuery });
  };
  return (
    <>
      <Toaster />
      <Searchbar value={query} onSubmit={onSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
