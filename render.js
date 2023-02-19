

const Renderer = function () {

  const renderPosts = function (posts) {
    $("#posts").empty()
    for (let post of posts) {
      $("#posts").append(`<div id=${post.id} class=post></div>`)
      
      $(`#${post.id}`).append(`<h1 class=post-text> ${post.text} </h1>`)
      

      for (let comment of post.comments) {
        $(`#${post.id}`).append(`<div id="${comment.id}" class=comments > ${comment.text} </div>`)
        $(`#${comment.id}`).append(`<div class=delete-comment> X </div>`)
      }

      $(`#${post.id}`).append(`<input class=comment-input type=text>`)
      $(`#${post.id}`).append(`<button class=add-comment> Comment </button>`)
      $(`#${post.id}`).append(`<div> <button class=delete-post> Delete Post </button> </div`)
    }
  }
  return {
    renderPosts
  }
}