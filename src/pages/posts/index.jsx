import Head from "next/head";
import { PostList } from "src/components/Post/PostsList";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <PostList />
    </div>
  );
};

export default Posts;
