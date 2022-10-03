import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";
import React, {
  useRef,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";

gsap.registerPlugin(ScrollTrigger);

function useLocoscroll(scrollRef, multiplier) {
  // if (typeof window == "undefined") return undefined;
  let locoScrollRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // scrollRef.current = document.querySelector("[data-scroll-container]");
  useEffect(() => {
    if (!(scrollRef && scrollRef.current)) return;
    let update;
    const LocomotiveScroll = import("locomotive-scroll").then(
      (LocomotiveScroll) => {
        locoScrollRef.current = new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
          multiplier: multiplier,
          getSpeed: true,
          getDirection: true,
          reloadOnContextChange: true,
          smartphone: {
            // smooth: true,
          },
          tablet: {
            smooth: true,
          },
        });
        locoScrollRef.current.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length
              ? locoScrollRef.current.scrollTo(value, 0, 0)
              : locoScrollRef.current.scroll.instance.scroll.y;
          }, // we don't have to define a scrollLeft because we're only scrolling vertically.
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
          pinType: scrollRef.current.style.transform ? "transform" : "fixed",
        });
        update = () => {
          if (locoScrollRef.current) locoScrollRef.current.update();
        };
        ScrollTrigger.addEventListener("refresh", update);
        ScrollTrigger.defaults({ scroller: scrollRef.current });
        ScrollTrigger.update();
        ScrollTrigger.refresh();
        setIsLoaded(true);
      }
    );

    return () => {
      if (locoScrollRef.current) locoScrollRef.current.destroy();
      ScrollTrigger.removeEventListener("refresh", update);
    };
  }, [scrollRef.current]);

  return [isLoaded, locoScrollRef.current];
}

export default useLocoscroll;
