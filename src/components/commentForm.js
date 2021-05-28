class CommentForm {

    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    static addCommentForm(id){
        const formContainer = document.getElementById("form-container");
        const form = document.createElement('form');
        form.dataset.id = id
        form.innerHTML = `<input id="comment-input" placeholder='comment' type='text'/><br>
        <input id="comment-submit" value='Post Comment' type='submit'/>`
        formContainer.append(form)
    
        form.addEventListener("submit", this.handleSubmit)
        // addEventListener('click', () => createComment(commentInput))
    }

    static handleSubmit(event) {
        event.preventDefault()
        const commentInput = event.target[0]
        Comment.createComment(event, commentInput)
    }
}
