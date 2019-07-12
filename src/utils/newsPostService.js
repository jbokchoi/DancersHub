// index
export function getNewsPosts() {
  return fetch(`/newsPosts`).then(function(res) {
    return res.json();
  });
}

// show
export function getNewsPost(id) {
  return fetch(`/${id}`).then(function(res) {
    return res.json();
  });
}

// create
export function createNewsPost(newsPost) {
  console.log("create news post hit");
  return fetch("/newsPosts", {
    method: "POST",
    body: JSON.stringify({
      title: newsPost.title,
      body: newsPost.body
    }),
    headers: {
      "content-type": "application/json"
    }
  });
}

// edit
export function editNewsPost(newsPost) {
  return fetch(`/newsPosts/${newsPost.id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: newsPost.title,
      body: newsPost.body
    }),
    headers: {
      "content-type": "application/json"
    }
  });
}

// delete
export function deleteNewsPost(id) {
  return fetch(`/newsPosts/${id}`, {
    method: "delete"
  }).then(function(res) {
    return res.json();
  });
}

// upvote/downvote posts
export function upvoteNewsPost(id, type) {
  var type = type === "downvote" ? "downvote" : "upvote";
  return fetch(`/newsPosts/${id}/${type}`, {
    method: "PUT",
    body: JSON.stringify({
      upvotes: 1
    }),
    headers: {
      "content-type": "application/json"
    }
  });
}

// add a comment to post
export function addComment(newsPostId, comment) {
  return fetch(`/newsPosts/${newsPostId}/comments`, {
    method: "POST",
    body: JSON.stringify({
      body: comment
    }),
    headers: {
      "content-type": "application/json"
    }
  });
}
