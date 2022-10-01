import "../styles/homePage.scss";
import "../styles/navBar.scss";
import "../styles/ourWork.scss";
import "../styles/sideBar.scss";
import "../styles/values.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>{/* <meta name="viewport" content="width=device-width" /> */}</Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
