import Head from "next/head";
import { useRouter } from "next/router";
import { PostListByUserId } from "src/components/Post/PostListByUserId";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const UserDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null
  );

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
      <h1 className="font-bold text-3xl">{data?.name}</h1>
      <p className="text-lg">{data?.username}</p>
      <h2 className="font-bold text-xl mt-10">ユーザーの詳細</h2>
      {data?.email ? (
        <div className="mt-1 text-xl">email : {data?.email}</div>
      ) : null}
      <ul className="list-inside list-disc mt-2 text-xl">
        {data?.address ? (
          <li>ストリート : address : {data?.address.street}</li>
        ) : null}
        {data?.address ? <li>サイト : {data?.address.suite}</li> : null}
        {data?.address ? <li>住所 : {data?.address.city}</li> : null}
        {data?.address ? <li>コード : {data?.address.zipcode}</li> : null}
      </ul>
      <h2 className="font-bold text-xl mt-10">投稿記事</h2>
      <div className="mt-2">
        <PostListByUserId id={data.id} />
      </div>
    </div>
  );
};