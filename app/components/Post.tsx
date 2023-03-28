import React from "react";

function Post({ post }: { post: POST }) {
  return (
    <div className="p-4">
      <div className="max-w-sm h-[270px] overflow-auto  hover:shadow-xl  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post?.title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post?.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
