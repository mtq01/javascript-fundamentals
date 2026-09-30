const yearBtn = document.getElementById("year");
const genreBtn = document.getElementById("genre");
const output = document.getElementById("output");


console.log(movies);

function displayMovies() {
    movies.map(movie => {
        // display list of movie names in the console
        console.log(movie);

        // create a new element for the page, add the movie name to each
        const element = document.createElement("p");
        element.textContent = `${movie.name} | ${movie.genre} | ${movie.year}`;

        // append the element to the page
        output.appendChild(element);
    }) 
}

displayMovies();



