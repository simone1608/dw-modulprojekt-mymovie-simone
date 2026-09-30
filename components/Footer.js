export default function Footer() {

    let footerElement = document.createElement("footer")

    footerElement.innerHTML = `
        <a href="index.html">
            <img class="footer-movie" src="img/movies.svg" alt="Movie">
        </a>

        <a href="#">
            <img class="footer-ticket" src="img/ticket.svg" alt="Ticket">
        </a>

        <a href="#">
            <img class="footer-saved" src="img/saved.svg" alt="Saved">
        </a>
    `;

    return footerElement;
}