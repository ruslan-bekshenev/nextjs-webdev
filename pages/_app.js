import Layout from "../components/Layout";
import Image from 'next/image'
import '../styles/globals.css'
import {useEffect, useState} from "react";
import youtubeImg from "../public/youtube.png"

const MyApp = ({ Component, pageProps }) => {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    console.log('1')
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
        <Image
          src={youtubeImg}
          width={500}
          height={350}
          alt="preview"
          placeholder="blur"
        />
      </Layout>
    );
  }
}

export default MyApp
