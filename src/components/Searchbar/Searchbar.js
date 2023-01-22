import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('title') ?? '');

  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchFormButton type="submit">
        <SearchFormBtnLabel>search</SearchFormBtnLabel>
        <GoSearch size="24" />
      </SearchFormButton>
      <SearchFormInput
        type="text"
        name="search"
        value={query}
        autocomplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={e => setQuery(e.target.value)}
      />
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
