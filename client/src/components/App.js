import React from 'react';

import Navigation from './Navigation';
import LandingPage from './LandingPage';
import ServicePage from './ServicePage';
import KnowledgePage from './KnowledgePage';
import PortfolioPage from './PortfolioPage';
import ContactPage from './ContactPage';

class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Navigation />

        <LandingPage />

        <ServicePage />

        <KnowledgePage />

        <PortfolioPage />

        <ContactPage />
      </div>
    );
  }
}

export default App;
