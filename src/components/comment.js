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
        let y = x.map(c => c.id)
        y.forEach(c => a.innerHTML += `<ol data-id=${c.id}>
        <span>${c.comment}</span><button data-action='delete'>X</button>
        </ol><br>`)
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

    static deleteComment(id, com) {
            let treeId = id
            let commentId = parseInt(com.dataset.id)
        fetch(`${treeURL}/${treeId}/comments/${commentId}`, {
            method: "DELETE"
        })
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            if (data.message === "Successfully deleted"){
                com.remove()
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }

    static listenDelete(id){
        let coms = document.querySelectorAll('ol')
        for(let com of coms) {
            console.log(com)
            com.addEventListener('click', () => Comment.deleteComment(id, com))
        }
    }
}