import React from "react";
import { getAllUsers, getUser, getUserPost } from "../../../lib/user";
import type { Metadata } from "next";
import Post from "../../components/Post";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: String };
}): Promise<Metadata> {
  const user = await getUser(id);
  return { title: user.name };
}

export default async function Detail({
  params: { id },
}: {
  params: { id: String };
}) {
  const userData: Promise<User> = getUser(id);
  const postData: Promise<POST[]> = getUserPost(id);

  // parallel request
  const [user, posts] = await Promise.all([userData, postData]);
  return (
    <div className="p-8">
      <h1 className="flex mb-4 justify-center text-center text-bold text-2xl ">
        {user?.name}
      </h1>
      <div className="flex flex-wrap gap-2">
        {posts?.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const data: Promise<User[]> = getAllUsers();
  const users = await data;

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}
