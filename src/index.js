treeURL = "http://localhost:3000/trees"
document.addEventListener('DOMContentLoaded', () => {
    fetchTrees()
})

function fetchTrees() {
    fetch(treeURL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(tree => new Tree(tree))
        Tree.render()
        getTreeInfo()
})
}

function getTreeInfo() {
    let labels = document.querySelectorAll('li')
    for(let label of labels) {
        label.addEventListener('click', () => Tree.getInfo(label))
    }
}

