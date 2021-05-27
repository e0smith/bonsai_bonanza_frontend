class Comment {
    static all = []
    constructor(id, comment) {
        this.id = id
        this.comment = comment

        Comment.all.push(this)
    }


}