treeURL = "http://localhost:3000/trees"
document.addEventListener('DOMContentLoaded', () => {
    fetchTrees()
    getTreeInfo()
})

function fetchTrees() {
    fetch(treeURL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(tree => new Tree(tree))
        Tree.render()
})
}

function getTreeInfo() {
    let labels = document.querySelectorAll('a')
    for(let label of labels) {
        label.addEventListener('click', Tree.getInfo)
    }
}