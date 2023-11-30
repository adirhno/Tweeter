/** @format */

const Renderer = function () {
  const renderPosts = function (_posts) {
    $("#posts").empty();
    for (let i = 0; i < _posts.length; i++) {
      let comments = "";
      for (let j = 0; j < _posts[i].comments.length; j++) {
        comments += `<p class="comments" id="${_posts[i].comments[j].id}">${_posts[i].comments[j].text}<span><span class="time">${_posts[i].comments[j].time}</span><button data-id="${_posts[i].comments[j].id}" class="deleteCommentButton">X</button></span></p>`;
      }

      $("#posts").append(
        `<div class="post-text" data-id="${_posts[i].id}">${_posts[i].text}<span><button class="deleteButton">Delete Post</button><button class="addComment" >Add  Comment</button></span><div><input class="commentInput" id="input${_posts[i].id}" placeholder='Write a comment'>${comments}</div></div>`
      );
    }
  };

  return {
    renderPosts: renderPosts,
  };
};
