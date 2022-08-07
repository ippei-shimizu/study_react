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
    <ol>
      {data.map((userId) => {
        return (
          <li key={userId.id}>
            <Link href={`/posts/${userId.id}`}>
              <a>{userId.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
