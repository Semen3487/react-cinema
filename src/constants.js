export const BASE_URL = 'http://localhost:5000/';

export const initMovie = {
  id: null,
  title: '',
  directors: [''],
  actors: [''],
  studios: [''],
  poster: '',
};

export const initActor = {
  id: null,
  movies: [''],
  fullName: '',
  birthYear: '',
  nationality: '',
  image: '',
};

export const initDirector = {
  id: null,
  movies: [''],
  fullName: '',
  birthYear: '',
  nationality: '',
  image: '',
};

export const initStudio = {
  id: null,
  title: '',
  location: '',
  foundationYear: '',
  logo: '',
};