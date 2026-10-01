export default function NowPlaying(movies) {
    let sectionElement = document.createElement("section");
    sectionElement.classList.add("showing-section");

    sectionElement.innerHTML = `
        <section class="title">
            <h2>Now Showing</h2>
            <button class="see-more-btn">See more</button>
        </section>
        
        <div class="movie-list">

        </div>
    `;

    let movieListElement = sectionElement.querySelector(".movie-list");

    movies.forEach(function (movie) {
        movieListElement.innerHTML += `
            <a href="detail.html?id=${movie.id}" class="movie-link">
                <article class="now-movie">
                    <img 
                        src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
                        alt="${movie.title}"
                        class="showing-poster">
                    <h3>${movie.title}</h3>
                    <p class="movie-rating">
                        <img src="img/star.svg" alt="Star" class="star-img">
                        ${movie.vote_average.toFixed(1)}/10
                        IMDb
                    </p>
                </article>
            </a>
        `
    });


    return sectionElement;
}