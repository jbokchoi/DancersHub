import tokenService from "./tokenService";

// index
export function getNewsPosts() {
  return fetch(`/newsPosts`).then(function(res) {
    return res.json();
  });
}

// show
export function getNewsPost(id) {
  return fetch(`/newsPosts/${id}`).then(function(res) {
    return res.json();
  });
}

// create
export function createNewsPost(newsPost) {
  console.log("NEWSPOST:", newsPost);
  return fetch("/newsPosts", {
    method: "POST",
    body: JSON.stringify({
      title: newsPost.newsPost.title,
      body: newsPost.newsPost.body
    }),
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
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
      "content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    }
  });
}

// delete
export function deleteNewsPost(id) {
  return fetch(`/newsPosts/${id}`, {
    method: "delete",
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
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
      "content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    }
  });
}

// delete a comment to a post

export function deleteComment(newsPostId, commentId) {
  return fetch(`/newsPosts/${newsPostId}/${commentId}`, {
    method: "delete",
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(function(res) {
    return res.json();
  });
}
