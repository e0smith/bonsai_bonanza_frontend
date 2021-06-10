const treeURL = "http://localhost:3000/trees"
const div = document.createElement('div')
const showDiv = document.createElement('div')
const renderDiv = document.getElementById("rendered-tree")
const deleteButton = document.getElementsByClassName('delete-button')

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
        sortButton()
})
}

function sortButton() {
    let sortToDiv = document.createElement('btn')
    sortToDiv.innerHTML = `<input id="sort" type="button" value="Sort" onclick="Tree.sortButton();"/>`
    renderDiv.prepend(sortToDiv)
}

function getTreeInfo() {
    let labels = document.querySelectorAll('li')
    for(let label of labels) {
        console.log(label)
        label.addEventListener('click', () => Tree.getInfo(label))
    }
}