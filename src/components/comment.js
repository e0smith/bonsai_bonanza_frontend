class Comment {

    static all = []
    constructor({id, comment, tree_id}) {
        this.id = id
        this.comment = comment
        this.tree_id = tree_id

        Comment.all.push(this)
    }

    static render(id) {
        let a = document.createElement('ul')
        a.id = "comment-container"
        // used for fetch call
        a.addEventListener('click', (e) => {
            if(e.target.className === "delete-button") {
                let comment = Comment.all.find((comment) => 
                {return(comment.id == e.target.parentElement.dataset.id)})
                e.target.parentElement.remove()
                comment.deleteComment()
            }
        })
        // renders comment
        let treeId = id
        let x = Comment.all.filter(comment => comment.tree_id == treeId)
        x.forEach(c => a.innerHTML += `<ol id="comment" data-id=${c.id}>
            <span>${c.comment + "    "}</span> 
            <button class="delete-button" data-id=${c.id} data-action='delete'>&#x1F5D1;</button>
            </ol><br>`)
        showDiv.append(a)
    }

    static createComment(event, commentInput) {
        // let label = event.target
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
            let comments = document.getElementById("comment-container")
            comments.innerHTML += `<ol id="comment" data-id=${data.id}>
            <span>${data.comment + "    "}</span> 
            <button class="delete-button" data-id=${data.id} data-action='delete'>&#x1F5D1;</button>
            </ol><br>`
            commentInput.value = ""
        })
        .catch(err => console.error(".catch: ", err))
        alert("Comment Created.")
    }

    deleteComment() {
        fetch(`${treeURL}/${this.tree_id}/comments/${this.id}`, {
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
        alert("Comment Deleted.")
    }

    static addCommentForm(id){
        const form = document.createElement('form');
        form.dataset.id = id
        form.innerHTML = `<input id="comment-input" placeholder='comment' type='text'/><br>
        <input id="comment-submit" value='Post Comment' type='submit'/>`
        renderDiv.append(showDiv)
        showDiv.append(form)
    
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const commentInput = event.target[0]
            Comment.createComment(event, commentInput)
        })
    } 
}
