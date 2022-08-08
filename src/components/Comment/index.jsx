import Head from "next/head";
import { PostByCommentId } from "src/components/Post/PostByCommentId";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>{data.name} ({data?.email})</div>
      <h1 className="text-3xl font-bold">{data?.name}</h1>
      <p>{data?.body}</p>
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <div className="mt-2">
      <PostByCommentId id={data.postId} />
      </div>
    </div>
  );
};
