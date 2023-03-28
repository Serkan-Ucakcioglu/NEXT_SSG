import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getAllUsers = async () => {
  const { data } = await api("/users");
  return data;
};

export const getUser = async (id: String) => {
  const { data } = await api(`/users/${id}`);

  return data;
};

export const getUserPost = async (id: String) => {
  const { data } = await api(`/posts?userId=${id}`);
  return data;
};
