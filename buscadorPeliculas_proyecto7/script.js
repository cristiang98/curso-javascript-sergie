const api_key = "98b06976d2f5bf358ca00c5e2089a0ad";

const urlBase = `https://api.themoviedb.org/3/search/movie`;
// agregamos un evento al boton de buscar peliculas y hacemos un callback a la funcion buscarPelicula
document
    .getElementById("searchButton")
    .addEventListener("click", buscarPelicula);

function buscarPelicula() {
    let searchInput = document.getElementById("searchInput").value;

    //llamamos a la api de peliculas

    fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
        .then((response) => response.json())
        .then((response) => displayMovies(response.results))
        .catch((err) => console.error(err));
}

// () => {} es una funcion anonima

function displayMovies(movies) {
    let resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "";

    if (movies.length === 0) {
        resultsDiv.innerHTML =
            "<p>No se encontraron peliculas de tu busqueda</p>";
        return;
    }

    movies.forEach((movie) => {
        let movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        let title = document.createElement("h2");
        title.textContent = movie.title;

        let releaseDate = document.createElement("p");
        releaseDate.textContent = `la fecha de lanzamiento es: ${movie.release_date}`;

        let overview = document.createElement("p");
        overview.textContent = movie.overview;

        let poster = document.createElement("img");
        poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overview);

        resultsDiv.appendChild(movieDiv);
    });
}
