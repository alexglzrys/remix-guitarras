import { Post } from "./Post";

export const ListadoPosts = ({ posts }) => {
  return (
    <>
      <h3 className="heading">Blog</h3>
      <div className="blog">
        {posts?.length &&
          posts?.map((post) => <Post key={post.id} post={post.attributes} />)}
      </div>
    </>
  );
};
