document.addEventListener("DOMContentLoaded", () => {
    fetchTrees();
})

function fetchTrees() {
    fetch("http://localhost:3000/trees")
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(err => console.warn(err))
}