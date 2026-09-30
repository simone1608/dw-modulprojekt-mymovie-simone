export default function MovieDetail(movie, cast, rating) {
    let sectionElement = document.createElement("section");
    sectionElement.classList.add("movie-detail");

    let hours = Math.floor(movie.runtime / 60);
    let minutes = movie.runtime % 60;

    let genreHTML = "";
    let castHTML = "";

    let languages = {
        en: "English",
        da: "Danish",
        de: "German",
        fr: "French",
        es: "Spanish",
        it: "Italian",
        ja: "Japanese",
        ko: "Korean"
    };

    let language = languages[movie.original_language] || movie.original_language;

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
        <a href="index.html" class="back-arrow">
            <img src="img/back-arrow.svg" alt="Back">
        </a>

        <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
        </label>

        <img 
            class="detail-backdrop"
            src="https://image.tmdb.org/t/p/original${movie.backdrop_path}"
            alt="${movie.title}">


        <div class="movie-info">
            <section class="detail-heading">
                <h1>${movie.title}</h1>
                <img src="img/saved.svg" alt="Saved" class="saved-img">
            </section>

            <p class="movie-rating">
                <img src="img/star.svg" alt="Star" class="star-img">
                ${movie.vote_average.toFixed(1)}/10
                IMDb
            </p>

            <div class="genres">
                ${genreHTML}
            </div>

            <section class="detail-info">

                <div class="info">
                    <p>Length</p>
                    <span>${hours}h ${minutes}min</span>
                </div>

                <div class="info">
                    <p>Language</p>
                    <span>${language}</span>
                </div>
                <div class="info">
                    <p>Rating</p>
                    <span>${rating}</span>
                </div>

            </section>
            
            <h2 class="description">Description</h2>
            <p class="description-info">${movie.overview}</p>

            <div class="cast-heading">
                <h3 class="cast">Cast</h3>
                <button class="see-more-cast">See more</button>
            </div>

            <div class="cast-list">
                ${castHTML}
            </div>
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