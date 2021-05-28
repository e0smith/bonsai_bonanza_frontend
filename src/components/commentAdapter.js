class CommentAdapter {
 
    getComments(li){
        fetch(`${treeURL}/${li.dataset.id}/comments`)
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
        fetch(`${treeURL}/${li.dataset.id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: commentInput.value
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
    }

    // deleteComment(li) {
    //     fetch(`${treeURL}/${li.dataset.id}/comments`, {
    //         method: "DELETE"
    //     })
    //     .then(resp => {
    //         console.log(resp)
    //         return resp.json()
    //     })
    //     .then(data => {
    //         if (data.message === "Successfully deleted"){
    //             li.remove()
    //         } else {
    //             alert(data.message)
    //         }
    //     })
    //     .catch(err => console.error(err))
    // }
}