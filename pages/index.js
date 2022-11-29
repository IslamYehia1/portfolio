import { useEffect, useRef, useState } from "react";
import HomePage from "../src/home";
import useLocoscroll from "../src/useLocoscroll";
import Nav from "../src/nav.js";

function Home() {
  const scrollRef = useRef(null);
  const [isLocoLoaded, locoScroll] = useLocoscroll(scrollRef, 1);
  const [isHomeMounted, setIsHomeMounted] = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     const rawRes = await fetch(
  //       "https://ipgeolocation.abstractapi.com/v1/?api_key=10a221e2834d4fbcba613cfcb0f4a28b"
  //     );
  //     const jsonRes = await rawRes.json();
  //     console.log(jsonRes);
  //   })();
  // }, []);
  useEffect(() => {
    if (isLocoLoaded) {
      setIsHomeMounted(true);
    }
  }, [isLocoLoaded]);

  return (
    <>
      <div className="overlay"></div>
      <div data-scroll-container ref={scrollRef} className="homeWrapper">
        <Nav isHomeMounted={isHomeMounted} />
        <HomePage isHomeMounted={isHomeMounted} />
      </div>
    </>
  );
}

export default Home;
