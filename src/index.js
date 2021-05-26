treeURL = "http://localhost:3000/trees"

document.addEventListener('DOMContentLoaded', (e) => {

})

fetch(treeURL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(tree => new Tree(tree))
        Tree.render()

})
