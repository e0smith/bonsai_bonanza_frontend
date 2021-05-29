class Comment {
    static all = []
    constructor(id, comment, tree_id) {
        this.id = id
        this.comment = comment
        this.tree_id = tree_id

        Comment.all.push(this)
    }

    // static getComments(id) {
    //     // let id = parseInt(label.dataset.id)
    //     fetch(`${treeURL}/${id}/comments`)
    //     .then(r => r.json())
    //     .then(comments => {
    //         comments.forEach(comment => new Comment(comment.id, comment.comment, comment.tree_id))
    //     })
    //     .catch(error => console.error(error))
    // }

    static render(id) {
        let a = document.createElement('li')
        let treeId = id
        let x = Comment.all.filter(comment => comment.id.tree_id == treeId)
        let y = x.map(c => c.id.comment)
        let z = y.forEach(c => a.innerHTML += `<li data-id=${treeId}>
        <span>${c}</span>
        <button data-action='delete'>X</button>
        </li>`)
        showDiv.append(a)
    }

    static createComment(event, commentInput) {
        let id = event.target.dataset.id
        fetch(`${treeURL}/${id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: {
                    comment: commentInput.value,
                    tree_id: id
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(".then(2): ", data)
            if (data.status === 201){
                console.log("success")
            } else {
                alert(data.errors)
            }
            commentInput.value = ""
        })
        .catch(err => console.error(".catch: ", err))
    }
}