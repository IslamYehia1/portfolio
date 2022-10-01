import React from "react";
import Link from "next/link";

// import { Router,  } from ";
// import "./css/navBar.scss";
import ContactUs from "./contactUs";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    // Toggling the Hamburger menu
    this.state = {
      toggle: false,
    };
  }
  render() {
    return (
      <nav id="navBar">
        <div className="third">
          <Link href="values" className="btn">
            <a className="btn">
              <img src={"/github-logo.png"} />
              <span>LinkedIn</span>
            </a>
          </Link>
        </div>
        <div className="third">
          <Link className="btn" href="/">
            <a className="btn">
              <img src="/linkedin.png" />
              <span>Github</span>
            </a>
          </Link>
        </div>
        <div className="third">
          <Link href="contactus" className="btn btn-right">
            <a className="btn">
              <img src="/download.png" />
              <span>CV</span>
            </a>
          </Link>
        </div>
      </nav>
    );
  }
}
