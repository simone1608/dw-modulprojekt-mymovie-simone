export default function Header() {

    let headerElement = document.createElement("header")

    headerElement.innerHTML = `
        <h1>MyMovies</h1>
    `;

    return headerElement;
}