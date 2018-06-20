import React from 'react';

class LandingPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section id="LandingPage">
        <div className="landingPageMainContainer">
          <div className="quote">
            <h1 id="me">JP.</h1>
            <h1 id="topquote">
              I don't try to be better than everybody else<br />
              I just want to be better than myself
        </h1>
            <h2>Jochen Panjaer</h2>
            <h3>graphic designer, web designer, web developer, freelancer</h3>
          </div>

          <button>CONTACT</button>
        </div>
      </section>
    );
  }
}

export default LandingPage;
