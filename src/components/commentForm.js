class CommentForm {

    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    static addCreateForm(){
        const formContainer = document.getElementById("form-container");
        console.log(formContainer)
        const form = document.createElement('form');
        console.log(form)
        form.innerHTML = `<input id="comment-input" placeholder='comment' type='text'/><br>
        <input id="comment-submit" value='Post Comment' type='submit'/>`
        formContainer.append(form)
    
        form.addEventListener("submit", this.handleSubmit)
    }

    static handleSubmit(event) {
        event.preventDefault()
        const commentInput = event.target[0]
        commentAdapter.createComment(commentInput)
    }

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