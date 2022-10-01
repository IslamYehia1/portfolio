import React from "react";
// import "./css/ourWork.scss";
import path from "path";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import DigiVideo from "../src/digination.mp4";
export default class OurWork extends React.Component {
  constructor(props) {
    super(props);
    // gsap.registerPlugin(ScrollTrigger);
    this.images = [
      ["", "", "image0", "image1"],
      ["image2", "image3", "image4", "image5"],
      ["image6", "image7", "image8", "image9"],
      ["image10", "image11", "", ""],
    ];
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
          <h1 className="title">RECENT WORK</h1>
          <div className="showCaseWrapper">
            <div className="showCase">
              <div className="leftText">
                <p>
                  <span>UX/UI DESIGN & DEVELOPMENT</span>
                </p>{" "}
                <div className="lineDesElement" />
              </div>
              <div className="firstSection">
                <div className="item firstItem">
                  <div className="projectMock">
                    <img className="mock" src={"./lightMock.png"} />
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
                  <h2>An IT company based in KSA</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="showCaseWrapper leftClient">
            <div className="showCase">
              <div className="leftText">
                <p>
                  <span>BRANDING & UX/UI DESIGN</span>
                </p>{" "}
                <div className="lineDesElement" />
              </div>
              <div className="firstSection">
                <div className="item secondItem">
                  <div className="projectMock">
                    <img className="mock" src={"./lightMock.png"} />
                    <img className="digination_1" src="./digination_1.png" />
                  </div>
                </div>
                <div className="bottomText">
                  <h1>CLIENT</h1>
                  <h2>A HIGH END TECH BRAND FOR SELLING</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="showCaseWrapper thirdProject">
            <div className="showCase">
              <div className="leftText">
                <p>
                  <span>BRANDING & UX/UI DESIGN</span>
                </p>{" "}
                <div className="lineDesElement" />
              </div>
              <div className="firstSection">
                <div className="item thirdItem">
                  <div className="projectMock">
                    {/* <img className="mock" src={"./lightMock.png"} /> */}
                    <img
                      className="goodtripz"
                      src="./goodtripz_transparent.png"
                    />
                  </div>
                  {/* <img src=" alt=""/> */}
                </div>
                <div className="bottomText">
                  <h1>CLIENT</h1>
                  <h2>A HIGH END TECH BRAND FOR SELLING</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="showCaseWrapper ">
            <div className="showCase">
              <div className="leftText">
                <p>
                  <span>BRANDING & UX/UI DESIGN</span>
                </p>{" "}
                <div className="lineDesElement" />
              </div>
              <div className="firstSection">
                <div className="item fourthItem">
                  <div className="projectMock">
                    <div className="diginationWrapper">
                      <img className="mock" src={"./lightMock.png"} />

                      <img className="diginationOG" src="./internship.png" />
                    </div>
                  </div>
                  {/* <img src=" alt=""/> */}
                </div>
                <div className="bottomText">
                  <h1>CLIENT</h1>
                  <h2>A HIGH END TECH BRAND FOR SELLING</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
