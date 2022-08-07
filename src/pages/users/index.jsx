import Head from "next/head";

import { Header } from "src/components/Header";
import { Users as UsersComponents } from "src/components/Users";

const Users = () => {
  return (
    <div>
      <Head>
        <title>Users Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />

      <UsersComponents />
    </div>
  );
};

export default Users;
