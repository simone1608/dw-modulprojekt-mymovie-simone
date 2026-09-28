import Header from "../components/Header.js";
import NowPlaying from "../components/NowPlaying.js";
import Popular from "../components/Popular.js";


let nowPlayingMovies = [];
let popularMovies = [];
let genres = [];

let rootElement = document.querySelector("#root");

function render() {
    rootElement.innerHTML = "";

    rootElement.append(Header());

    let mainElement = document.createElement("main");

    mainElement.append(NowPlaying(nowPlayingMovies));
    mainElement.append(Popular(popularMovies, genres));

    rootElement.append(mainElement);
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


fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
        accept: "application/json",
        Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODExYTlmYTViNWJkYTU5YTc3Y2E3Zjk4NjVlOTQ2ZCIsIm5iZiI6MTc5MDU4Mzk1My45NzgsInN1YiI6IjZhYmEyNDkxM2RkYmY2OTgwMmYyYWJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OC4Sc1VkWxEH138MP3yu43SbLD_Qt_9syNGl3bJP_Q"
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        popularMovies = data.results;

        render();
    });


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
        console.log(genres);


        render();
    });