import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightblue } from "src/hooks/useBgLightblue";

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightblue();

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <div className={styles.top}>
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>

        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <Main page="about" />

      <Footer />
    </div>
  );
}
