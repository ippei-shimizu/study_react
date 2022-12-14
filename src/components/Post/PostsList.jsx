import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const PostList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/posts`);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です。</div>;
  }
  return (
    <ul className="space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a className="group">
                <h1 className="font-bold group-hover:text-blue-400">
                  {post.title}
                </h1>
                <p className="text-sm text-gray-500 group-hover:text-blue-300">
                  {post.body}
                </p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
