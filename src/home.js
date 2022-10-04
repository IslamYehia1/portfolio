import React from "react";
import HomePage from "./homePage.js";
import OurWork from "./ourWork";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.locoScroll = props.locoScroll  ;
  }
  componentDidMount() {
    // this.locoScroll.update() ;
  }
  render() {
    return (
      <>
        <HomePage isHomeMounted={this.props.isHomeMounted} />
        <OurWork />
      </>
    );
  }
}
