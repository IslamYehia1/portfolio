import React from "react";
import Link from "next/link";

// import { Router,  } from ";
// import "./css/navBar.scss";
import Image from "next/image";
import ContactUs from "./contactUs";
import gsap from "gsap";

import useLocoscroll from "./useLocoscroll";
import ContactMe from "./contactMe.js";
import GithubLogo from "../public/github-logo.svg";
import LinkedInLogo from "../public/linkedin.svg";
import ContactIcon from "../public/contact.svg";
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
      gsap.set(".overlay", {
        scaleY: 0,
        transformOrigin: "top center",
      });
      this.contactOverlayTl = gsap
        .timeline({ paused: true })
        .set(".overlay", {
          autoAlpha: 1,
        })
        .to(".overlay", {
          scaleY: 1,
          duration: 0.3,
          ease: "power3.easeOut",
        })
        .fromTo(
          ".contactMe",
          {
            autoAlpha: 0,
            y: -10,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
          }
        );
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
              <LinkedInLogo />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="third">
            <a
              className="btn"
              target="_blank"
              href="https://github.com/IslamYehia1"
            >
              <GithubLogo />
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
                <ContactIcon />
                <span>Contact</span>
              </a>
            </button>
          </div>
        </nav>
      </>
    );
  }
}
