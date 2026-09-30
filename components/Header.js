export default function Header() {

    let headerElement = document.createElement("header")

    headerElement.innerHTML = `
        <h1>MyMovies</h1>

        <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
        </label>
    `;

    return headerElement;
}