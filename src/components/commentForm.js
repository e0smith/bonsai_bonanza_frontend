class CommentForm {

    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    static addCreateForm(){
        const formContainer = document.getElementById("form-container");
        const form = document.createElement('form');
        form.innerHTML = `<input id="comment-input" placeholder='comment' type='text'/><br>
        <input id="comment-submit" value='Post Comment' type='submit'/>`
        formContainer.append(form)
    
        form.addEventListener("submit", this.handleSubmit)    }

    static handleSubmit(event) {
        event.preventDefault()
        const commentInput = event.target[0]
        createComment(commentInput)
        // label.addEventListener('click', () => createComment(label, commentInput))
    }

    static createComment(label, commentInput) {

        let id = parseInt(label.dataset.id)
        console.log(commentInput.value)
        fetch(`${treeURL}/${id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: commentInput.value,
                tree_id: id
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("this is the second .then", data)
            if (data.status === 201){
                console.log("success")
            } else {
                alert(data.errors)
            }
            commentInput.value = ""
        })
        .catch(err => console.error("this is the catch", err))
    // listenDelete(){
    //     const commentContainer = document.getElementById("comments-container");
    //     commentsContainer.addEventListener("click", this.handleDelete)
    // }
    
    // handleDelete(e){
    //     const li = e.target.parentElement
    //             commentAdapter.deleteComment(li)
    // }

    // showCommentForm() {
    //     const btn = document.getElementById('comment-form-btn')
    //     btn.addEventListener('click', this.makeCommentForm)
    // }

    // makeComentForm() {
    //     const btn = document.getElementsById('comment-form-btn')
    //     btn.classList.add("hidden")
    //     const formContainer = document.getElementById('form-container')
    //     const form = document.createElement('form');
    //     form.id = 'form'

    //     const commentLabel = document.createElement('label')
    //     commentLabel.innerText = "Make Comment:"
    //     const commentInput = document.createElement('input')
    //     commentInput.id = 'comment-input'
    //     commentInput.type = 'text'
        
    //     const commentSubmit = document.createElement('input')
    //     conmmentSubmit.type = 'submit'
    //     commentSubmit.value = 'Post Comment'
    //     form.append(commentLabel, commentInput)
    //     formContainer.append(form)

    //     form.addEventListener('submit', )

    // }

    
}