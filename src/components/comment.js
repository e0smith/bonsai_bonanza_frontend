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
        <span>${c.comment + "    "}</span><button data-action='delete'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg></button>
        </ol><br>`)
        showDiv.append(a)
    }

    static createComment(event, commentInput) {
        let label = event.target
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
                console.log("Comment Deleted. Please Refresh.")
            } else {
                console.log("errors" + data.errors)
            }
            commentInput.value = ""
        })
        .catch(err => console.error(".catch: ", err))

        showDiv.innerHTML = ""
        div.style.display = ""
        // Tree.pageRefresh(label)
    }

    static deleteComment(id, com) {
            let label = id
            let treeId = parseInt(label.dataset.id)
            let commentId = parseInt(com.dataset.id)
        fetch(`${treeURL}/${treeId}/comments/${commentId}`, {
            method: "DELETE"
        })
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            if (data.status === 204) {
                alert("Comment Deleted Please Refresh")
            }
        })
        .catch(err => console.error(err))

        // fetchTrees()
        // while (renderDiv.firstChild) renderDiv.removeChild(renderDiv.firstChild)
    }

    static listenDelete(id){
        let coms = document.querySelectorAll('ol')
        for(let com of coms) {
            console.log(com)
            com.addEventListener('click', () => Comment.deleteComment(id, com))
        }
    }
}