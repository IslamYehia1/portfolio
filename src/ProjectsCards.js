import Card from "./card.js";
import digination from "../public/digination.png";
import internship from "../public/internship.png";
import digination_1 from "../public/digination_1.png";
import goodtripz from "../public/goodtripz.png";
import gsap from "gsap";
import { useEffect } from "react";
function ProjectsCards({ isHomeMounted }) {
  useEffect(() => {
    if (isHomeMounted) {
      const cards = gsap.utils.toArray(".card");
      cards.forEach((card, index) => {
        gsap.set(cards[index], {
          zIndex: cards.length - index,
          autoAlpha: 0,
        });
      });
      gsap.set(cards[0], {
        autoAlpha: 1,
        rotate: "0",
      });
      for (let i = 1; i < 3; i++) {
        gsap.set(cards[i], {
          autoAlpha: 1,
          rotate: "random(-15 , 15)",
        });
      }
      const cardsTl = gsap.timeline({
        delay: 4,
        repeatDelay: 4,
        repeat: -1,
        scrollTrigger: {
          trigger: "#firstPage",
          start: "top-=10px top",
          end: "top+=5px top",
          toggleActions: "play pause restart restart",
        },
      });

      for (let i = 0; i < cards.length; i++) {
        const tl = gsap
          .timeline()
          .to(cards[i], {
            autoAlpha: 0,
            x: "random([-50, 50 , 0])",
            y: "random([-50, 50 , 0])",
            duration: 0.5,
          })
          .set(cards[i], {
            zIndex: 0,
            x: 0,
            y: 0,
          })
          .set(cards[(i + 3) % cards.length], {
            zIndex: 1,
          })
          .set(cards[(i + 2) % cards.length], {
            zIndex: 2,
          })
          .set(cards[(i + 1) % cards.length], {
            zIndex: 3,
          })
          .to(cards[(i + 3) % cards.length], {
            autoAlpha: 1,
            rotate: "random(-15 , 15 , 5)",
            duration: 0.5,
          })
          .to(
            cards[(i + 2) % cards.length],
            {
              rotate: "random(-15 , 15, 7)",
              duration: 0.5,
            },
            "<"
          )
          .to(
            cards[(i + 1) % cards.length],
            {
              rotation: 0,
              duration: 0.5,
            },
            "<"
          );
        cardsTl.add(tl, i * 3);
      }
    }
  }, [isHomeMounted]);
  return (
    <>
      <Card
        title={"Demo for Digination"}
        description={"Marketing site"}
        className={"firstThreeCards"}
        src={digination}
      />
      <Card
        title={"Digination"}
        description={"Marketing site"}
        className={"firstThreeCards"}
        src={digination_1}
      />
      <Card
        title={"Goodtripz"}
        description={"Marketing site"}
        className={"firstThreeCards"}
        src={goodtripz}
      />
      <Card
        title={"Digination Internship"}
        description={"Marketing site"}
        src={internship}
      />
    </>
  );
}
export default ProjectsCards;
