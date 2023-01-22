import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '32561021188665f103817e2a950fe3f2';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export const getMovies = (type = 'trending', query = '', page = 1) => {
  let path = '';

  switch (type) {
    case 'trending':
      // console.log('trending');
      path = 'trending/movie/day';
      return axios.get(`${BASE_URL}/${path}?api_key=${API_KEY}&page=${page}`);

    case 'search':
      // console.log('search');
      path = '/search/movie';
      return axios.get(
        `${BASE_URL}/${path}?api_key=${API_KEY}&page=${page}&query=${query}`
      );

    default:
      break;
  }
};

export const getMovieById = async id => {
  const path = `/movie/${id}`;
  return axios.get(`${BASE_URL}/${path}?api_key=${API_KEY}`);
};

export const getMovieDetails = (type, id) => {
  let path = '';
  switch (type) {
    case 'casts':
      path = `/movie/${id}/credits`;
      break;

    case 'reviews':
      path = `movie/${id}/reviews`;
      break;

    default:
      throw new Error('Invalid type of details');
  }
  return axios.get(`${BASE_URL}/${path}?api_key=${API_KEY}`);
};
