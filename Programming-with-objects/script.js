function createPost(userId, displayName, content) {
  return {
    postID: "",
    userId: userId,
    displayName: displayName,
    content: content,
    createdAt: new Date().toISOString(),
    comments: [],
  };
}

const post = {
  userId: 1,
  displayName: "Elias",
  content: "My first post",
  createdAt: "2025-10-15",
  comments: [
    {
      userId: 1,
      displayName: "Elias",
      content: "My first post",
      createdAt: "2025-10-15",
    },
    {
      userId: 2,
      displayName: "Henrik",
      content: "My first post",
      createdAt: "2025-10-15",
    },
  ],
};

const posts = [];

posts.push(post);
posts.push(createPost(1, "Elias", "My second post"));
posts.push(createPost(1, "Elias", "My third post"));
posts.push(createPost(1, "Henrik", "My fourth post"));

posts[2].comments.push({
  displayName: "new user",
  content: "Comment from js",
});

const container = document.querySelector(".post-container");

posts.forEach((post) => {
  container.innerHTML += `
        <div class="post">
            <h2>${post.displayName}</h2>
            <p>${post.content}</p>
            <p>${post.createdAt}</p>
        </div>
;`;
  if (post.comments.length && post.comments) {
    post.comments.forEach((comment) => {
      container.innerHTML += `
        <h3>${comment.content}</h3>
        `;
    });
  }
});
