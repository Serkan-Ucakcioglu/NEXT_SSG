import React from "react";
import { getAllUsers, getUser, getUserComment } from "../../lib/user";
import type { Metadata } from "next";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: String };
}): Promise<Metadata> {
  const user = await getUser(id);
  return { title: user.name };
}

async function Detail({ params: { id } }: { params: { id: String } }) {
  const userData: Promise<User> = getUser(id);
  const commentData: Promise<Comment> = getUserComment(id);

  const [user, comment] = await Promise.all([userData, commentData]);

  return (
    <div>
      <h1>{user?.name}</h1>
      <h1>{JSON.stringify(comment)}</h1>
    </div>
  );
}

export default Detail;

export async function generateStaticParams() {
  const data: Promise<User[]> = getAllUsers();
  const users = await data;

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}
