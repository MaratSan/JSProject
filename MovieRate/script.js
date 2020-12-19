const numberOfFilms = +prompt('How many films have you watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for(let i = 0; i < 2; i++){
    const a = prompt('What is the last move do you watched?', ' ');
          b = prompt('Rate him', ' ');

    if(a!=null && b!=null && a!= ' ' && b!=' ' && a.length <50){
            personalMovieDB.movies[a] = b;
            console.log('done');  
        }else {
            console.log('error');
        i--;
        }         
    }

    if (personalMovieDB.count <10) {
        console.log("You watch so many films");
    }else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
        console.log("You are good watcher");
    }else if (personalMovieDB.count >=30){
        console.log("You are kinoman");
    }else{
        console.log("Error");
    }

    console.log(personalMovieDB);