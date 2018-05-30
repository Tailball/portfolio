import React from "react";
import Waypoint from "react-waypoint";

class KnowledgePage extends React.Component {
  handleOnEnter(scrollData) {
    const nav = document.querySelector('.navigation');
    if(!nav.classList.contains('navigation-inverse')) {
      nav.classList.add("navigation-inverse");
    }
  }

  render() {
    return (
      <section id="KnowledgePage">
        <Waypoint onEnter={this.handleOnEnter} />
      </section>
    );
  }
}

export default KnowledgePage;