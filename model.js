function Tweeter() {

  let postIdCounter = 2;

  let commentIdCounter = 6;

  getPosts = () => posts

  addPost = (text) => {
    postIdCounter++;
    let newPost = {
      text,
      id: `p${postIdCounter}`,
      comments: []
    };
    posts.push(newPost);
  };


  addComment = (text, postId) => {
    commentIdCounter++;
    let newComment = [];
    let newCommentId = `c${commentIdCounter}`;


    newComment["id"] = newCommentId;
    newComment["text"] = text;

    for (let post of posts) {
      if (post.id === postId) {
        post.comments.push(newComment);
      }
    }
  };

  removePost = (postId) => {
    for (let postIndex in posts) {
      let currentPost = posts[postIndex];

      if (currentPost.id === postId) {
        posts.splice(postIndex, 1);
      }
    }
  };

  removeComment = (postId, commentId) => {
    for (let postIndex in posts) {
      let currentPost = posts[postIndex];

      if (currentPost.id === postId) {
        for (let commentIndex in currentPost.comments) {
          let currentComment = currentPost.comments[commentIndex];

          if (currentComment.id === commentId) {
            currentPost.comments.splice(commentIndex, 1);
          }
        }
      }
    }
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment
  };
}


