const apiURL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", () => {
    fetchTrees();
})

function fetchTrees() {
    const treesContainer = document.getElementById("trees-container")
    fetch(apiURL + "trees")
    .then(r => r.json())
    .then(data => {
        data.forEach(function(tree){
            treesContainer.innerHTML += `<li>${tree.name}</li>`
        })
    })
    .catch(err => console.warn(err))
}