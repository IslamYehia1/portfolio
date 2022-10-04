import React from "react";
// import "./css/ourWork.scss";
import path from "path";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import DigiVideo from "../src/digination.mp4";
import DiginationDemoMock from "../public/Digination_Demo_Mock/lightMock.png";
import DiginationMock from "../public/Digination_Demo_Mock/lightMock.png";
import InternshipMock from "../public/Internship_Mock/lightMock.png";
import Goodtripz from "../public/goodtripz_transparent.png";
import Internship from "../public/internship.png";
import Digination from "../public/digination_1.png";
import Image from "next/image";
export default class OurWork extends React.Component {
  constructor(props) {
    super(props);
    // gsap.registerPlugin(ScrollTrigger);
  }
  componentDidMount() {
    var showCaseItems = document.querySelectorAll(".showCaseWrapper");
    showCaseItems.forEach(function (item, index) {
      const q = gsap.utils.selector(item);
      const scaleTl = gsap.to(q(".showCase"), {
        paused: true,
        scale: 0.95,
        duration: 0.3,
        ease: "0.25, 0.47, 0.12, 0.99",
      });
      item.onmouseenter = () => {
        scaleTl.restart();
      };
      item.onmouseout = () => scaleTl.reverse();
    });
  }
  render() {
    return (
      <div id="ourWork">
        {/* <div className="horizontalPics">
          <div
            className="picsWrapper"
            data-scroll-offset="-20%"
            data-scroll
            data-scroll-speed="-2"
          >
            {this.images.map((row, index) => {
              return (
                <div
                  className="row"
                  key={index}
                  data-scroll-offset="-100%,-100%"
                  data-scroll
                  data-scroll-speed={(index + 1) % 2 ? "1" : "-1"}
                  data-scroll-direction="horizontal"
                >
                  {this.images[index].map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="pic"
                        style={{
                          backgroundImage: image
                            ? `url(${
                                require("../public/assets/img/clients/" +
                                  image +
                                  ".jpg").default
                              })`
                            : "none",
                        }}
                      ></div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div> */}
        <div className="ourWork">
          <h1 className="title">
            <span>Recent</span> Projects
          </h1>

          <a
            className="showCaseWrapper"
            href="https://demo.diginationmea.com/"
            target="_blank"
          >
            <div className="showCase">
              <div className="leftText">
                <p>
                  <span>ReactJS - GSAP</span>
                </p>{" "}
                <div className="lineDesElement" />
              </div>
              <div className="firstSection">
                <div className="item firstItem">
                  <div className="projectMock">
                    <Image className="mock" src={DiginationDemoMock} />
                    <div className="videoWrapper">
                      <video autoPlay muted loop>
                        <source src={"./Digination.mp4"} type="video/mp4" />
                      </video>
                      {/* <img className="projectPic" src={"./digination.png"} /> */}
                    </div>
                  </div>
                </div>
                <div className="bottomText">
                  <h1>Digination</h1>
                  <h2>UX/UI DESIGN & DEVELOPMENT</h2>
                </div>
              </div>
            </div>
          </a>

          <a
            className="showCaseWrapper leftClient"
            href="https://diginationmea.com/"
            target="_blank"
          >
            <div className="showCase">
              <div className="leftText">
                <p>
                  <span>Wordpress</span>
                </p>{" "}
                <div className="lineDesElement" />
              </div>
              <div className="firstSection">
                <div className="item secondItem">
                  <div className="projectMock">
                    <Image className="mock" src={DiginationMock} />
                    <Image className="digination_1" src={Digination} />
                  </div>
                </div>
                <div className="bottomText">
                  <h1>Digination</h1>
                  <h2>Development & Maintenance</h2>
                </div>
              </div>
            </div>
          </a>
          <a
            className="showCaseWrapper thirdProject"
            href="https://goodtripz.vercel.app/#"
            target="_blank"
          >
            <div className="showCase">
              <div className="leftText">
                <p>
                  <span>FIGMA - NextJS - Linux - NodeJS</span>
                </p>{" "}
                <div className="lineDesElement" />
              </div>
              <div className="firstSection">
                <div className="item thirdItem">
                  <div className="projectMock">
                    {/* <img className="mock" src={"./lightMock.png"} /> */}
                    <Image className="goodtripz" src={Goodtripz} />
                  </div>
                  {/* <img src=" alt=""/> */}
                </div>
                <div className="bottomText">
                  <h1>Goodtripz</h1>
                  <h2>Design & Development</h2>
                </div>
              </div>
            </div>
          </a>
          <a
            className="showCaseWrapper"
            href="https://internship.diginationmea.net/"
            target="_blank"
          >
            <div className="showCase">
              <div className="leftText">
                <p>
                  <span>Wordpress</span>
                </p>{" "}
                <div className="lineDesElement" />
              </div>
              <div className="firstSection">
                <div className="item fourthItem">
                  <div className="projectMock">
                    <div className="diginationWrapper">
                      <Image className="mock" src={InternshipMock} />
                      <Image className="diginationOG" src={Internship} />
                    </div>
                  </div>
                  {/* <img src=" alt=""/> */}
                </div>
                <div className="bottomText">
                  <h1>Digination Internship</h1>
                  <h2>UI/UX Desgin & development</h2>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
