const numberOfFilms = +prompt('How many films have you watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('What is the last movie you watched?', '');
      b = prompt('Rate him', '');
      c = prompt('What is the last movie you watched?', '');
      d = prompt('Rate him', '');  

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);