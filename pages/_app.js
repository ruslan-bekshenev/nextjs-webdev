import Layout from "../components/Layout";
import '../styles/globals.css'
import {useEffect, useState} from "react";

const MyApp = ({ Component, pageProps }) => {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
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
      </Layout>
    );
  }
}

export default MyApp
