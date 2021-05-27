const ul = document.createElement('ul')

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
            ul.innerHTML += `<a data-id=${tree.id}>${tree.name}<br></a>`
        })
        const renderDiv = document.getElementById("rendered-tree")
        renderDiv.append(ul)
    }

    static getInfo(tree) {
        t = new Tree(tree)
        t.render()
    }

    // renderTreeInfo(){
    //     const li = document.getElementById(`tree-${this.id}`)
    //     const ul = document.createElement('ul')

    //     this.tree.forEach
    // }
}
