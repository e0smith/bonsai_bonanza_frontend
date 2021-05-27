const div = document.createElement('div')
const showDiv = document.createElement('div')
const renderDiv = document.getElementById("rendered-tree")

class Tree {

    static all = []

    constructor({id, name, pruning, wiring, watering, repotting, propagation, disease, placement, fertilizing}) {
        this.id = id
        this.name = name
        this.pruning = pruning
        this.wiring = wiring
        this.watering = watering
        this.repotting = repotting
        this.propagation = propagation
        this.disease = disease
        this.placement = placement
        this.fertilizing = fertilizing

        Tree.all.push(this)
    }

    static render() {
        this.all.forEach(tree => {
            div.innerHTML += `<li data-id=${tree.id}>${tree.name}</li><br>`
        })
        renderDiv.append(div)
    }

    static getInfo(label) {
        const h1 = document.createElement('h1')
        let id = parseInt(label.dataset.id)
        let tree = Tree.all.find(tree => tree.id === id)
        console.log(tree)
        h1.innerText = tree.name
        showDiv.append(h1)
    }

    // renderTreeInfo(){
    //     const li = document.getElementById(`tree-${this.id}`)
    //     const div = document.createElement('div')

    //     this.tree.forEach
    // }
}
