treeURL = "http://localhost:3000/trees"
document.addEventListener('DOMContentLoaded', () => {
    fetchTrees()
    let labels = document.querySelectorAll('a')
    for(let label of labels) {
        label.addEventListener('click', Tree.getInfo)
    }
})

function fetchTrees() {
    fetch(treeURL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(tree => new Tree(tree))
        Tree.render()
})
}
