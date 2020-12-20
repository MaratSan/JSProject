const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt('How many films have you watched?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('How many films have you watched?', '');
        }
    },
    rememberMyFilms: function(){
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
        },
    detectPersonalLevel: function(){
            if (personalMovieDB.count <10) {
                console.log("You watch so many films");
                }else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
                    console.log("You are good watcher");
                }else if (personalMovieDB.count >=30){
                    console.log("You are kinoman");
                }else{
                    console.log("Error");
                }
        },
    showMyDB: function(hidden) {
            if(!hidden){
                console.log(personalMovieDB);
            }
        },
    toggleVisibleMyDB: function() {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },
    writeYourGeners: function(){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Your favorite genre number ${i}`);
                    
            if(genre === '' || genre == null) {
                console.log('incorrect');
                i--;
            } else {
                    personalMovieDB.genres[i-1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre ${i+1} is ${item}`);
        });
    }
};