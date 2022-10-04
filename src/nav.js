import React from "react";
import Link from "next/link";

// import { Router,  } from ";
// import "./css/navBar.scss";
import Image from "next/image";
import ContactUs from "./contactUs";
import gsap from "gsap";

import useLocoscroll from "./useLocoscroll";
import ContactMe from "./contactMe.js";
export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    // Toggling the Hamburger menu
    this.state = {
      isContactActive: false,
    };
    this.contactOverlayTl;
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (!this.props.isHomeMounted) return;
    if (prevProps !== this.props && this.props.isHomeMounted) {
      this.contactOverlayTl = gsap
        .timeline({ paused: true })
        .to(".overlay", {
          autoAlpha: 1,
        })
        .to(".contactMe", {
          autoAlpha: 1,
        });
    }
    if (prevState !== this.state && this.state.isContactActive) {
      this.contactOverlayTl.restart();
    } else {
      this.contactOverlayTl.reverse();
    }
  }
  render() {
    return (
      <>
        <ContactMe
          onClose={() => {
            this.setState({ isContactActive: false });
          }}
        />
        <nav id="navBar">
          <div className="third">
            <a
              className="btn"
              target="_blank"
              href="https://www.linkedin.com/in/islam-mansour-7b7b58248/"
            >
              <img src={"/github-logo.png"} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="third">
            <a
              className="btn"
              target="_blank"
              href="https://github.com/IslamYehia1"
            >
              <img src="/linkedin.png" />
              <span>Github</span>
            </a>
          </div>
          <div className="third">
            <button
              onClick={() => {
                this.setState({ isContactActive: true });
              }}
              className="btn btn-right"
            >
              <a className="btn">
                <img src="/contact.png" />
                <span>Contact</span>
              </a>
            </button>
          </div>
        </nav>
      </>
    );
  }
}
