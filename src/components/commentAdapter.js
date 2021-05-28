
// class CommentAdapter {

//     static getComments(label){
//         let id = parseInt(label.dataset.id)
//         fetch(`${treeURL}/${id}/comments`)
//         .then(r => r.json())
//         .then(comments => {
//             comments.forEach(comment => {
//                 const c = new Comment(comment)
//                 Comment.render()
//             })
//         })
//         .catch(error => console.error(error))
//     }


//     }

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
// }