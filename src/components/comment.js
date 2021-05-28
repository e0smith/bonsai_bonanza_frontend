class Comment {
    static all = []
    constructor(id, comment) {
        this.id = id
        this.comment = comment

        Comment.all.push(this)
    }
    static render() {
        return(`<li id="comment-${this.id}" data-id=${this.id}>
        <span>${this.comment}</span>
        <button data-action='delete'>X</button>
        </li>`
        )
    }

}