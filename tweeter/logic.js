/** @format */

const Tweeter = function () {
  let postIdCounter = 1;
  let commentIdCounter = 1;
  const _posts = [];

  const getPosts = function () {
    return _posts;
  };

  const addPost = function (text) {
    if (!text == "") {
      const post = {
        id: "p" + postIdCounter,
        text,
        comments: [],
      };

      _posts.push(post);
      postIdCounter++;
    }
  };

  const removePost = function (id) {
    for (let i = 0; i < _posts.length; i++) {
      if (_posts[i].id === id) {
        _posts.splice(_posts[i].id - 1, 1);
      }
    }
  };

  const addComment = function (text, postId) {
    if (!text == "") {
      let hour = new Date().getHours();
      let minutes = new Date().getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      const time = hour + ":" + minutes;

      for (let i = 0; i < _posts.length; i++) {
        if (_posts[i].id === postId) {
          _posts[i].comments.push({
            id: "c" + commentIdCounter,
            text,
            time,
          });
          commentIdCounter++;
        }
      }
    }
  };

  const removeComment = function (postId, commentId) {
    for (let i in _posts) {
      if (_posts[i].id === postId) {
        for (let j = 0; j < _posts[i].comments.length; j++) {
          if (_posts[i].comments[j].id === commentId) {
            _posts[i].comments.splice(j, 1);
          }
        }
      }
    }
  };

  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};

// const tweeter2 = Tweeter();
// tweeter2.addPost("adir1");
// tweeter2.addPost("adir2");
// tweeter2.addPost("adir3");
// tweeter2.addPost("adir4");
// tweeter2.addComment("new comment", "p2");
// tweeter2.addComment("new comment 2", "p2");
// console.log(tweeter2.getPosts());
