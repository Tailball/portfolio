import React from 'react';
import Waypoint from 'react-waypoint';

class LandingPage extends React.Component {
  constructor(props){
    super(props);

    this.handleOnEnter = this.handleOnEnter.bind(this);
  }

  handleOnEnter(scrollData){
    const nav = document.querySelector('.navigation');
    if(nav.classList.contains('navigation-inverse')){
      nav.classList.remove('navigation-inverse');
    }
  }

  render() {
    return (
      <section id="LandingPage">
        <div className="landingPageMainContainer">
          <div className="quote">
            <h1 id="me">JP.</h1>
            <h1>
              I don't try to be better than everybody else<br />
              I just want to be better than myself
        </h1>
            <h2>Jochen Panjaer</h2>
            <h3>graphic designer, web designer, web developer, freelancer</h3>
          </div>

          <button>CONTACT</button>
        </div>

        <Waypoint onEnter={this.handleOnEnter} />
      </section>
    );
  }
}

export default LandingPage;
