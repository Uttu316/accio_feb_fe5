console.log("A");

const getUserData = (userName) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (userName === "abc") {
        res("ABC_XYZ");
      } else {
        rej("OOps");
      }
    }, 3000);
  });
};
const getPost = (userID) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (userID.includes("ABC")) {
        res("POST_123");
      } else {
        rej("no post");
      }
    }, 3000);
  });
};

const getComment = (postId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (postId.includes("POST")) {
        res("Comment_123");
      } else {
        rej("no comment");
      }
    }, 3000);
  });
};

console.log("B");
getUserData("abc")
  .then((v) => {
    console.log("User", v);
    return getPost(v);
  })
  .then((v) => {
    console.log("Post", v);
    return getComment(v);
  })
  .then((v) => {
    console.log("Comment", v);
  })
  .catch((e) => {
    console.log("Error", e);
  });

console.log("C");

//A B C User, Post, Comment
