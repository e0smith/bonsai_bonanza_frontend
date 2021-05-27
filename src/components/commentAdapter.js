// const comURL = treeURL + '/' + Tree.getInfo(label) + '/comments'

class CommentAdapter {
 
    getComments(label){
        fetch(treeURL + '/' + Tree.getInfo(label) + '/comments')
        .then(r => r.json())
        .then(comments => {
            comments.forEach(comment => {
                const c = new Comment(comment)
                c.render()
            })
        })
        .catch(error => console.error(error))
    }

    createComment(commentInput) {
        fetch(treeURL + '/' + Tree.getInfo(label) + '/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: commentInput.value
            })
        })
    }
}