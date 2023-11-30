/** @format */
const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

const post = function () {
  const text = $("#input").val();
  tweeter.addPost(text);
  renderer.renderPosts(tweeter.getPosts());
};

$("#posts").on("click", ".deleteButton", function () {
  const postId = $(this).closest("div").data().id;
  tweeter.removePost(postId);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".addComment", function () {
  const postId = $(this).parent().closest("div").data().id;
  const text = $("#input" + postId).val();
  tweeter.addComment(text, postId);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".deleteCommentButton", function () {
  const postId = $(this).closest(".post-text").data().id;
  const commentId = $(this).data().id;
  tweeter.removeComment(postId, commentId);
  renderer.renderPosts(tweeter.getPosts());
});
