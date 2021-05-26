treeURL = "http://localhost:3000/trees"
document.getElementById('rendered-tree').addEventListener('click', Tree.getInfo)
document.addEventListener('DOMContentLoaded', (e) => {
})

fetch(treeURL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(tree => new Tree(tree))
        Tree.render()

})

