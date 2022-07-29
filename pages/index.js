import Heading from "../components/Heading";
import styles from '../styles/Home.module.css';
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading text="Hello world2" />
      </div>
    </>
  )
}

export default Home;