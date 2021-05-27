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
        // find tree
        let id = parseInt(label.dataset.id)
        let tree = Tree.all.find(tree => tree.id === id)

        // create all elements
        let wateringP = document.createElement('p')
        let diseaseP = document.createElement('p')
        const h1 = document.createElement('h1')

        // add innerText
        h1.innerText = tree.name
        wateringP.innerText = "Watering: " + tree.watering
        diseaseP.innerText = tree.disease

        // append everything
        renderDiv.append(showDiv)
        showDiv.append(h1, wateringP, diseaseP)

        // styling
        div.style.display = "none"

        // create home button
    }

    // renderTreeInfo(){
    //     const li = document.getElementById(`tree-${this.id}`)
    //     const div = document.createElement('div')

    //     this.tree.forEach
    // }
}


// showDiv = ""
// div.style.display = ""