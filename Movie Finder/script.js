document.addEventListener("DOMContentLoaded", () => {
	const movieForm = document.getElementById("movieForm");
	const movieResults = document.getElementById("movieResults");
	movieForm.addEventListener("submit", (e) => {
		const movieName = document.getElementById("movieInput").value;
		e.preventDefault();
		searchMovie(movieName);
	});
	async function searchMovie(movieName) {
		try {
			movieResults.innerHTML =
				'<div class="loading">Searching movies....</div>';
			const response = await fetch(
				`http://www.omdbapi.com/?apiKey=15dfeb8d&s=${movieName}`
			);
			const data = await response.json();
			if ((data.Response === "False")) {
				throw new Error("No Movies Found");
			}
			displayMovies(data.Search);
		} catch (error) {
			movieResults.innerHTML = `
      <div class="error-message">
      "Error searching movies. Please try again."
      </div>
      `;
		}
	}
	function displayMovies(movies) {
		movieResults.innerHTML = `
    <div class="movies-grid">
    ${movies
			.map(
				(movies) => `
      <div class="movie-card">
      <img 
      src= "${movies.Poster}"
      alt = "${movies.Title}"
      class = "movie-poster"
      />
      <div class='movie-info'>
      <h3>${movies.Title}</h3>
      <div class='movie-year'>${movies.Year}</div>
      </div>
      </div>
      `
			)
			.join("")}
    </div>
    `;
	}
});
