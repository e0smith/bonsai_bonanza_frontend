class Comment {
    static all = []
    constructor(id, comment, tree_id) {
        this.id = id
        this.comment = comment
        this.tree_id = tree_id

        Comment.all.push(this)
    }
    static render() {
        return(`<li id="comment-${this.id}" data-id=${this.id}>
        <span>${this.comment}</span>
        <button data-action='delete'>X</button>
        </li>`
        )
    }

    static getComments(label){
        let id = parseInt(label.dataset.id)
        fetch(`${treeURL}/${id}/comments`)
        .then(r => r.json())
        .then(comments => {
            comments.forEach(comment => {
                const c = new Comment(comment)
                Comment.render()
            })
        })
        .catch(error => console.error(error))
    }

}