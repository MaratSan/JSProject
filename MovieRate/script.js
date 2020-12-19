let numberOfFilms;

function start(){
    numberOfFilms = +prompt('How many films have you watched?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How many films have you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms(){
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
    }

    rememberMyFilms();

    function detectPersonalLevel(){
        if (personalMovieDB.count <10) {
            console.log("You watch so many films");
        }else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
            console.log("You are good watcher");
        }else if (personalMovieDB.count >=30){
            console.log("You are kinoman");
        }else{
            console.log("Error");
        }
    }
    detectPersonalLevel();

    function showMyDB(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    }

    showMyDB(personalMovieDB.private);

    function writeYourGeners(){
        for(let i = 1; i <= 3; i++){
            const genre = promt(`Your favorite genre number ${i}`);
            personalMovieDB.genres[i - 1] = genre;

        }
    }

    writeYourGeners();

    console.log(personalMovieDB);