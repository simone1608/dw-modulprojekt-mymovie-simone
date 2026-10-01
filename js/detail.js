import MovieDetail from "../components/MovieDetail.js";
import DarkMode from "../js/darkmode.js";

const rootElement = document.querySelector("#root");


const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

let movie;
let cast = [];
let rating = "";

function render() {
    if (movie && cast.length > 0 && rating) {
        rootElement.innerHTML = "";
        rootElement.append(MovieDetail(movie, cast, rating));
        DarkMode();
    }
}

fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODExYTlmYTViNWJkYTU5YTc3Y2E3Zjk4NjVlOTQ2ZCIsIm5iZiI6MTc5MDU4Mzk1My45NzgsInN1YiI6IjZhYmEyNDkxM2RkYmY2OTgwMmYyYWJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OC4Sc1VkWxEH138MP3yu43SbLD_Qt_9syNGl3bJP_Q"
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        movie = data;
        render();
    });

fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODExYTlmYTViNWJkYTU5YTc3Y2E3Zjk4NjVlOTQ2ZCIsIm5iZiI6MTc5MDU4Mzk1My45NzgsInN1YiI6IjZhYmEyNDkxM2RkYmY2OTgwMmYyYWJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OC4Sc1VkWxEH138MP3yu43SbLD_Qt_9syNGl3bJP_Q"
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        cast = data.cast;

        render();
    });

fetch(`https://api.themoviedb.org/3/movie/${movieId}/release_dates`, {
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODExYTlmYTViNWJkYTU5YTc3Y2E3Zjk4NjVlOTQ2ZCIsIm5iZiI6MTc5MDU4Mzk1My45NzgsInN1YiI6IjZhYmEyNDkxM2RkYmY2OTgwMmYyYWJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OC4Sc1VkWxEH138MP3yu43SbLD_Qt_9syNGl3bJP_Q"
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let usRelease = data.results.find(function (release) {
            return release.iso_3166_1 === "US";
        });

        let ratingInfo = usRelease.release_dates.find(function (release) {
            return release.certification !== "";
        });

        rating = ratingInfo.certification;

        render();
    });