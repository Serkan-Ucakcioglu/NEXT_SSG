import React from "react";

function Post({ post }: { post: POST }) {
  return (
    <div>
      <p>{post?.title}</p>
      <p>{post?.body}</p>
    </div>
  );
}

export default Post;
