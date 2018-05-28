import React from 'react';

import LandingPage from './LandingPage';

class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <LandingPage />
        
        <div id="ServicePage" />

        <div id="KnowledgePage" />

        <div id="ContactPage" />
      </div>
    );
  }
}

export default App;
