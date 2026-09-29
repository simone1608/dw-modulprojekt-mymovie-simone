export default function MovieDetail(movie, cast) {
    let sectionElement = document.createElement("section");
    sectionElement.classList.add("movie-detail");

    let hours = Math.floor(movie.runtime / 60);
    let minutes = movie.runtime % 60;

    let genreHTML = "";
    let castHTML = "";

    movie.genres.forEach(function (genre) {
        genreHTML += `
            <span class="genre">${genre.name}</span>
        `;
    });

    cast.slice(0, 4).forEach(function (person) {

        castHTML += `
            <div class="cast-person">
                <img 
                    src="https://image.tmdb.org/t/p/w500${person.profile_path}"
                    alt="${person.name}">
                <p>${person.name}</p>
            </div>
        `;
    });

    sectionElement.innerHTML = `
        <img 
            class="detail-backdrop"
            src="https://image.tmdb.org/t/p/original${movie.backdrop_path}"
            alt="${movie.title}">

        <h1>${movie.title}</h1>

        <p class="movie-rating">
            <img src="img/star.svg" alt="Star" class="star-img">
            ${movie.vote_average.toFixed(1)}/10
        </p>

        <div class="genres">
            ${genreHTML}
        </div>

        <section class="detail-info">

            <div>
                <p>Length</p>
                <span>${hours}h ${minutes}min</span>
            </div>

            <div>
                <p>Language</p>
                <span>${movie.original_language}</span>
            </div>

        </section>

        <p>${movie.overview}</p>

        <div class="cast-heading">
            <h2>Cast</h2>
            <button class="see-more-cast">See more</button>
        </div>

        <div class="cast-list">
            ${castHTML}
        </div>
    `;

    let seeMoreButton = sectionElement.querySelector(".see-more-cast");
    let castListElement = sectionElement.querySelector(".cast-list");

    let showAllCast = false;

    seeMoreButton.addEventListener("click", function () {
        if (showAllCast === false) {

            let allCastHTML = "";

            cast.forEach(function (person) {
                allCastHTML += `
                    <div class="cast-person">
                        <img 
                            src="https://image.tmdb.org/t/p/w500${person.profile_path}"
                            alt="${person.name}">
                        <p>${person.name}</p>
                    </div>
                `;
            });

            castListElement.innerHTML = allCastHTML;

            showAllCast = true;
            seeMoreButton.textContent = "See less";
        }

        else {
            castListElement.innerHTML = castHTML;

            showAllCast = false;
            seeMoreButton.textContent = "See more";
        }
    });

    return sectionElement;
}