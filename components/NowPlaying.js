export default function NowPlaying(movies) {
    let sectionElement = document.createElement("section");

    sectionElement.innerHTML = `
        <h2>Now Showing</h2>

        <div class="movie-list">

        </div>
    `;

    let movieListElement = sectionElement.querySelector(".movie-list");

    movies.forEach(function (movie) {
        movieListElement.innerHTML += `
            <a href="detail.html?id=${movie.id}" class="movie-link">
                <article class="movie">
                    <img 
                        src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
                        alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p class="movie-rating">
                        <img src="img/star.svg" alt="Star">
                        ${movie.vote_average.toFixed(1)}/10
                    </p>
                </article>
            </a>
        `
    });


    return sectionElement;
}