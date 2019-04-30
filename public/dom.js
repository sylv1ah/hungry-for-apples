const button = document.getElementById('search-button');
const input = document.getElementById('search-character');
const userSearch = document.getElementById('user-search');
const characterContainer = document.querySelector('.character-list');

button.addEventListener("click", () => {
    console.log("button clicked");
    userSearch.textContent = input.value;
})