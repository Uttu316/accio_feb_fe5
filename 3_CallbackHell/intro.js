const getData = (username, onSuccess, onFailure) => {
  console.log("Fetching User");
  setTimeout(() => {
    if (username === "abc") {
      const data = {
        name: "ABC XYZ",
        id: "ac2w22",
      };
      onSuccess(data);
    } else {
      onFailure("Oops");
    }
  }, 3000);
}; //3sec

const getPosts = (userId, onSuccess, onFailure) => {
  console.log("Fetching Posts");

  setTimeout(() => {
    if (userId) {
      const post = {
        postId: "32323213",
        caption: "Travelling to japan",
      };
      onSuccess(post);
    } else {
      onFailure("No post");
    }
  }, 3000);
}; //3sec

const getComments = (postId, onSuccess, onFailure) => {
  console.log("Fetching Post");
  setTimeout(() => {
    if (postId) {
      const comment = {
        commentId: "213221321c3",
        comment: "Wow!",
      };
      onSuccess(comment);
    } else {
      onFailure("No comment");
    }
  }, 3000);
}; //3sec

console.log("Start");
getData(
  "abc",
  (user) => {
    console.log("User", user);
    getPosts(
      user.id,
      (post) => {
        console.log("Post", post);
        getComments(
          post.postId,
          (comment) => {
            console.log("Comment", comment);
          },
          (err) => {
            console.log(err);
          },
        );
      },
      (err) => {
        console.log(err);
      },
    );
  },
  (err) => {
    console.log(err);
  },
);
