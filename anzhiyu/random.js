var posts=["posts/4a17b156.html","posts/2eec1551.html","posts/7c63bf7d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };