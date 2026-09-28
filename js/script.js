import Header from "../components/Header.js";
import MovieList from "../components/MovieList.js";


let nowPlayingMovies = [];
let popularMovies = [];

let rootElement = document.querySelector("#root");

function render() {
    rootElement.innerHTML = "";

    rootElement.append(Header());

    let mainElement = document.createElement("main");

    mainElement.append(MovieList(nowPlayingMovies));

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