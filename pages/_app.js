import Layout from "../components/Layout";
import '../styles/globals.css'
import {useEffect, useState} from "react";

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
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp
