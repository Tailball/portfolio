import React from 'react';

import Navigation from './Navigation';

const LandingPage = () => (
  <div id="LandingPage">
    <Navigation />

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
  </div>
);

export default LandingPage;
