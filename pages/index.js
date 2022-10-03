import { useEffect, useRef, useState } from "react";
import HomePage from "../src/home";
import useLocoscroll from "../src/useLocoscroll";
function Home() {
  const scrollRef = useRef(null);
  const [isLocoLoaded, locoScroll] = useLocoscroll(scrollRef, 1);
  const [isHomeMounted, setIsHomeMounted] = useState(false);

  useEffect(() => {
    if (isLocoLoaded) {
      setIsHomeMounted(true);
    }
  }, [isLocoLoaded]);

  return (
    <div data-scroll-container ref={scrollRef} className="homeWrapper">
      <HomePage isHomeMounted={isHomeMounted} />
    </div>
  );
}

export default Home;
