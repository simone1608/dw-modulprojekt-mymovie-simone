import Header from "../components/Header.js";
import NowPlaying from "../components/NowPlaying.js";
import Popular from "../components/Popular.js";
import Footer from "../components/Footer.js";
import DarkMode from "../js/darkmode.js";


let nowPlayingMovies = [];
let popularMovies = [];
let genres = [];

let popularPage = 1;

let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            popularPage = popularPage + 1;
            fetchPopularMovies()
        }
    })
})

let rootElement = document.querySelector("#root");

function render() {
    rootElement.innerHTML = "";

    rootElement.append(Header());

    let mainElement = document.createElement("main");

    mainElement.append(NowPlaying(nowPlayingMovies));
    if (popularMovies.length > 0 && genres.length > 0) {
        mainElement.append(Popular(popularMovies, genres));
    }

    rootElement.append(mainElement);

    rootElement.append(Footer());

    observer.disconnect();

    let fifthLastMovie = document.querySelector(".popular-list .movie-link:nth-last-of-type(5)");
    if (fifthLastMovie) {
        observer.observe(fifthLastMovie);

    }


    DarkMode();
}

fetch("https://api.themoviedb.org/3/movie/now_playing", {
    headers: {
        accept: "application/json",
        Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODExYTlmYTViNWJkYTU5YTc3Y2E3Zjk4NjVlOTQ2ZCIsIm5iZiI6MTc5MDU4Mzk1My45NzgsInN1YiI6IjZhYmEyNDkxM2RkYmY2OTgwMmYyYWJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OC4Sc1VkWxEH138MP3yu43SbLD_Qt_9syNGl3bJP_Q"
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        nowPlayingMovies = data.results;

        render();
    });


function fetchPopularMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?page=${popularPage}`, {
        headers: {
            accept: "application/json",
            Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODExYTlmYTViNWJkYTU5YTc3Y2E3Zjk4NjVlOTQ2ZCIsIm5iZiI6MTc5MDU4Mzk1My45NzgsInN1YiI6IjZhYmEyNDkxM2RkYmY2OTgwMmYyYWJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OC4Sc1VkWxEH138MP3yu43SbLD_Qt_9syNGl3bJP_Q"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            popularMovies = [...popularMovies, ...data.results];

            data.results.forEach(function (movie) {

                fetch(`https://api.themoviedb.org/3/movie/${movie.id}`, {
                    headers: {
                        accept: "application/json",
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODExYTlmYTViNWJkYTU5YTc3Y2E3Zjk4NjVlOTQ2ZCIsIm5iZiI6MTc5MDU4Mzk1My45NzgsInN1YiI6IjZhYmEyNDkxM2RkYmY2OTgwMmYyYWJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OC4Sc1VkWxEH138MP3yu43SbLD_Qt_9syNGl3bJP_Q"
                    }
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        let hours = Math.floor(data.runtime / 60);
                        let minutes = data.runtime % 60;

                        movie.runtime = hours + "h " + minutes + "m";

                        render();
                    });
            });

        });
}

fetchPopularMovies()


fetch("https://api.themoviedb.org/3/genre/movie/list", {
    headers: {
        accept: "application/json",
        Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODExYTlmYTViNWJkYTU5YTc3Y2E3Zjk4NjVlOTQ2ZCIsIm5iZiI6MTc5MDU4Mzk1My45NzgsInN1YiI6IjZhYmEyNDkxM2RkYmY2OTgwMmYyYWJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OC4Sc1VkWxEH138MP3yu43SbLD_Qt_9syNGl3bJP_Q"
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        genres = data.genres;

        render();
    });