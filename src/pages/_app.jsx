import "src/styles/globals.css";
import Head from "next/head";
import { SWRConfig } from "swr";
import { AppLayout } from "src/layouts/AppLayout/AppLayout";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  const json = await response.json();
  return json;
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
