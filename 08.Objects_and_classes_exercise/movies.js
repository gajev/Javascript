function Movies(array) {
    moviesList = []
    array.forEach(command => {
        if (command.includes("addMovie")) {
            commandSplit = command.split("addMovie ")
            let currentMovie = {
                name : commandSplit[1]
            }
            moviesList.push(currentMovie);

        } else if (command.includes("directedBy")) {
            commandSplit = command.split(" directedBy ")
            const movieName = commandSplit[0]
            const director = commandSplit[1]
            const movie = moviesList.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes("onDate")) {
            commandSplit = command.split(" onDate ")
            const movieName = commandSplit[0]
            const movieDate = commandSplit[1]
            const movie = moviesList.find(m => m.name === movieName);
            if (movie) {
                movie.date = movieDate;
            }
        }
    })
    moviesList
        .filter(m => m.name && m.director && m.date)
        .forEach(m => console.log(JSON.stringify(m)));
}

        Movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'])
        Movies([

            'addMovie The Avengers',
            
            'addMovie Superman',
            
            'The Avengers directedBy Anthony Russo',
            
            'The Avengers onDate 30.07.2010',
            
            'Captain America onDate 30.07.2010',
            
            'Captain America directedBy Joe Russo'
            
            ])