class Comment {
    
    static all = []
    constructor(id, comment, tree_id) {
        this.id = id
        this.comment = comment
        this.tree_id = tree_id

        Comment.all.push(this)
    }

    static render(id) {
        let a = document.createElement('ul')
        let treeId = id
        let x = Comment.all.filter(comment => comment.id.tree_id == treeId)
        let y = x.map(c => c.id.comment)
        y.forEach(c => a.innerHTML += `<ul data-id=${treeId}>
        <span>${c}</span><button data-action='delete'>X</button>
        </ul><br>`)
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