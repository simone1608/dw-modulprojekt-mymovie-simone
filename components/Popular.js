export default function Popular(movies, genres) {
    let sectionElement = document.createElement("section");
    sectionElement.classList.add("popular-section")

    sectionElement.innerHTML = `
        <section class="title">
            <h2>Popular</h2>
            <button class="see-more-btn">See more</button>
        </section>

        <div class="popular-list"></div>
    `;

    let popularListElement = sectionElement.querySelector(".popular-list");

    movies.forEach(function (movie) {

        let genreHTML = "";

        movie.genre_ids.forEach(function (genreId) {

            let genre = genres.find(function (genre) {
                return genre.id === genreId;
            });

            genreHTML += `
                <span class="genre">${genre.name}</span>
            `;

        });

        popularListElement.innerHTML += `
            <a href="detail.html?id=${movie.id}" class="movie-link">
                <article class="popular-movie">
                    <img 
                        src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
                        alt="${movie.title}"
                        class="popular-poster">
                    <div class="popular-info">    
                        <h3>${movie.title}</h3>
                        <p class="movie-rating">
                            <img src="img/star.svg" alt="Star" class="star-img">
                            ${movie.vote_average.toFixed(1)}/10
                            IMDb
                        </p>
                        <div class="genres">
                            ${genreHTML}
                        </div>

                        <div class="runtime">
                            <img src="img/time.svg" alt="runtime" class="time-img">
                            <p class="time">
                                ${movie.runtime || ""}
                            </p>
                        </div>
                        
                    </div>
                </article>
            </a>
        `;


    });



    return sectionElement
}