import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersComponents } from "src/components/Users";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
  const USERS_API_URL = `https://jsonplaceholder.typicode.com/users`;
  const users = await fetch(USERS_API_URL);
  const usersData = await users.json();

  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      },
    },
  };
};

const Users = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Users Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <SWRConfig value={{fallback}}>
        <Header />
        <UsersComponents />
      </SWRConfig>
    </div>
  );
};

export default Users;
