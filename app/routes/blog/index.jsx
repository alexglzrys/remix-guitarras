import { useLoaderData } from "@remix-run/react";
import { ListadoPosts } from "../../components/ListadoPosts";
import { getPosts } from "../../models/posts.server";

export const loader = async () => {
  // Recuperar todos los posts desde el servidor
  const posts = await getPosts();
  return posts.data;
};

// Este componente actua como el contenido principal (Home) del Blog
const HomeBlog = () => {
  // usar la información en el componente
  const posts = useLoaderData();

  return <ListadoPosts posts={posts} />;
};

export default HomeBlog;
