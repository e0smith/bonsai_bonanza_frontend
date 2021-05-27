class commentForm {

    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    addCreateForm(){
        const formContainer = document.getElementById("form-container");
        const form = document.createElement('form');
        form.innerHTML = `<input id="comment-input" placeholder='comment' type='text'/><br>
        <input id="comment-submit" value='Post Comment' type='submit'/>`
        formContainer.append(form)
    
        form.addEventListener("submit", this.handleSubmit)
    }

    handleSubmit(event) {
        event.preventDefault()
        const commentInput = event.target[0]
    }

    listenDelete(){
        const treesContainer = document.getElementById("trees-container");
        storesContainer.addEventListener("click", this.handleDelete)
    }
    
    handleDelete(e){
        const li = e.target.parentElement
                commentAdapter.deleteComment(li)
        } 
    }

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