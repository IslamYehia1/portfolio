import React from "react";
// import { Router, Link } from "@reach/router";
import { useRouter } from "next/router";
import Link from "next/link";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import loadBackground from "../src/background.js";
import ProjectsCards from "./ProjectsCards";
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    loadBackground();
    gsap.set("#ourWork", {
      backgroundColor: "transparent",
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isHomeMounted && this.props !== prevProps) {
      const cards = gsap.utils.toArray(".card");
      gsap
        .timeline({
          scrollTrigger: {
            id: "homePage",
            trigger: "#ourWork",
            start: "top center",
            // end: "top+=10px center",
            toggleActions: "play pause resume reverse",
          },
        })
        .to(".homeWrapper", {
          backgroundColor: "#121217",
        });
      const projects = gsap.utils.toArray(".projectMock");

      for (let i = 0; i < 3; i++) {
        const project = projects[i];
        const q = gsap.utils.selector(cards[i]);
        const qProject = gsap.utils.selector(project);

        const projectScaleTL = gsap
          .timeline({
            scrollTrigger: {
              scrub: false,
              trigger: project,
              // start: "center center",
              start: "center center+=20%",
              toggleActions: "play none resume reverse",
            },
          })
          .set(project, {
            zIndex: 15,
          })
          .to(q(".imgWrapper"), {
            opacity: 0,
          })
          .fromTo(
            project,
            { opacity: 0, scale: 0.7 },
            {
              opacity: 1,
              scale: 1,
            }
          );

        gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              trigger: "#firstPage",
              start: "top+=10px top",
              // end: "top+=20px top",
              toggleActions: "restart none none none ",
            },
          })

          .to(
            ".firstThreeCards",
            {
              duration: 0.4,
              autoAlpha: 1,
            },
            "<"
          )
          .to(
            ".card:not(.firstThreeCards)",
            {
              duration: 0.4,
              autoAlpha: 0,
            },
            "<"
          );
        let moveCardsTl;
        function moveCardsToProjects() {
          const a = q(".img")[0].getBoundingClientRect();
          const b = project.getBoundingClientRect();
          const targetCoordinates = {
            x: (b.right - a.right + b.left - a.left) / 2,
            y: (b.bottom - a.bottom + b.top - a.top) / 2,
          };
          moveCardsTl = gsap
            .timeline({
              defaults: {
                duration: 10,
              },
              scrollTrigger: {
                id: "cards",
                trigger: "#firstPage",
                start: "top+=50px top",
                endTrigger: project,
                end: "center center+=20%",
                // snap: 0.2,
                scrub: true,
              },
            })
            .set(cards[i], {
              pointerEvents: "none",
            })

            .to(
              q(".cardTextWrapper"),
              {
                autoAlpha: 0,
                // display: "none",
                duration: 0.2,
              },
              "<"
            )
            .to(
              ".cardsLoaderWrapper",
              {
                autoAlpha: 0,
                duration: 0.2,
              },
              "<"
            )
            .to(
              cards[i],
              {
                boxShadow: "none",
                duration: 0.2,
              },
              "<"
            )
            .to(
              cards[i],
              {
                duration: 10 - i * 0.2,
                ease: i === 0 ? "linear" : "slow(0.7, 0.7, false)",
                // rotation: 0,
                motionPath: {
                  path: [targetCoordinates],
                  align: "self",
                  alignOrigin: [0.5, 0.5],
                  autoRotate: false,
                },
              },
              "<"
            )
            .to(
              cards[i],
              {
                // scale: 5,
                duration: 10,
                rotation: 0,
                ease: "power4.in",
              },
              "<"
              // "3"
            );
          // .to(
          //   q(".cardTextWrapper"),
          //   {
          //     autoAlpha: 0,
          //     // display: "none",
          //     duration: 0.2,
          //   },
          //   "0"
          // )
          // .to(
          //   q(".imgWrapper"),
          //   {
          //     borderRadius: "1.2rem",
          //   },
          //   "<"
          // );
          return moveCardsTl;
        }
        moveCardsToProjects();
        function reCalcMovingCardsTl() {
          var progress = moveCardsTl.progress(); //record the progress so that we can match it with the new tween (jump to the same spot)
          console.log(progress);
          moveCardsTl.pause();
          if (moveCardsTl.scrollTrigger) moveCardsTl.scrollTrigger.kill(); //rewind and kill the original tween.
          moveCardsToProjects().progress(progress); //create a new tween based on the new size, and jump to the same progress value.
        }
        window.addEventListener("resize", reCalcMovingCardsTl);
      }
    }
  }
  componentWillUnmount() {
    ScrollTrigger.getById("cards").kill();
  }
  render() {
    return (
      <>
        <section id="firstPage">
          <div id="content">
            <div className="contentText">
              <div className="titleWrapper">
                <div className="titleLineWrapper">
                  <p className="titleLine">
                    Building
                    <span>web</span>
                  </p>
                </div>
                <div className="titleLineWrapper">
                  <p className="titleLine"> applications</p>
                </div>
                <div className="titleLineWrapper">
                  <p className="titleLine">with passion</p>
                </div>
              </div>
              <div className="aboutMe">
                <p>
                  Hi, I'm Islam Mansour, I use NextJS, ReactJS, NodeJS, Python,
                  , SQL, Wordpress or whatever the appropriate tool is to build
                  a web app.
                </p>
              </div>
            </div>
            <div className="cardsStack">
              <ProjectsCards isHomeMounted={this.props.isHomeMounted} />
            </div>
          </div>
          {/* <div className="grain"></div> */}
          <canvas id="background"></canvas>
        </section>
      </>
    );
  }
}
