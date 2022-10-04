import "../styles/homePage.scss";
import "../styles/navBar.scss";
import "../styles/ourWork.scss";
import "../styles/sideBar.scss";
import "../styles/values.scss";
import Head from "next/head";
import PortfolioImg from "../public/portfolio.png";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Islam Mansour</title>
        <meta
          name="description"
          content="I'm a web developer based in Egypt and available for remote work. This is my portfolio website."
        />
        <meta property="og:title" content="Islam Mansour's portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={"/portfolio.png"} />
        <meta property="og:url" content="https://islammansour.site" />

        {/* <meta name="viewport" content="width=device-width" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
