class Tree {

    static all = []

    constructor({id, name, pruning, wiring, watering, repotting, propagation, disease, placement, fertilizing, image, comments}) {
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
        this.image = image
        this.comments = comments.map(c => new Comment(c))
        Tree.all.push(this)
    }

    static render() {
        this.all.forEach(tree => {
                div.innerHTML += `<li data-id=${tree.id}>${tree.name}</li><br>`;
        })
        renderDiv.append(div)
    }

    static getInfo(label) {
        // find tree
        let id = parseInt(label.dataset.id)
        let tree = Tree.all.find(tree => tree.id === id)

        // create all elements
        let wateringP = document.createElement('p')
        let pruningP = document.createElement('p')
        let wiringP = document.createElement('p')
        let repottingP = document.createElement('p')
        let propagationP = document.createElement('p')
        let diseaseP = document.createElement('p')
        let placementP = document.createElement('p')
        let fertilizingP = document.createElement('p')
        const h1 = document.createElement('h1')
        let commentsP = document.createElement('p')
        // image
        var imageURL = tree.image
        var img = document.createElement('img')
        img.src = imageURL

        // add innerText
        h1.innerText = tree.name
        wateringP.innerText = "Watering: " + tree.watering
        pruningP.innerText = "Pruning: " + tree.pruning
        wiringP.innerText = "Wiring: " + tree.wiring
        repottingP.innerText = "Repotting: " + tree.repotting
        propagationP.innerText = "Propagation: "  + tree.propagation
        diseaseP.innerText = "Disease: " + tree.disease
        placementP.innerText = "Placement: " + tree.placement
        fertilizingP.innerText = "Fertilization: " + tree.fertilizing
        commentsP.innerText = "Comments: "

        // home button
        let button = document.createElement('button')
        button.innerText = "Home"

        // append everything
        showDiv.dataset.id = id
        renderDiv.append(showDiv)
        showDiv.append(h1, button, img, wateringP, pruningP, wiringP, repottingP, propagationP, diseaseP, placementP, fertilizingP, commentsP)

        //comment form/render
        Comment.render(id)
        // deleteListen(id)
        CommentForm.addCommentForm(id)
        
        // styling
        div.style.display = "none"

        // homebutton logic
        button.addEventListener('click', function(){
                showDiv.innerHTML = ""
                div.style.display = ""
        })
    }
}
