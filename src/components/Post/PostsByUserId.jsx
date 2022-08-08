import Link from "next/link";
import { usePostsByUserId } from "src/hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);
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
      {data.map((userId) => {
        return (
          <li key={userId.id}>
            <Link href={`/posts/${userId.id}`}>
              <a className="group">
                {" "}
                <h1 className="font-bold group-hover:text-blue-400">
                  {userId.title}
                </h1>
                <p className="text-sm text-gray-500 group-hover:text-blue-300">
                  {userId.body}
                </p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
