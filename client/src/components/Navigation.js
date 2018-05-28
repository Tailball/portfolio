import React from 'react';
import scrollToElement from 'scroll-to-element';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(e) {
    e.preventDefault();

    scrollToElement(`#${e.target.dataset.target}`, {
      align: 'top',
      offset: 0,
      ease: 'out-expo',
      duration: 1000
    });
  }

  render() {
    return (
      <div className="navigation">
        <a onClick={this.onNavClick} href="#" data-target="ServicePage">
          SERVICES
          </a>

        <a onClick={this.onNavClick} href="#" data-target="KnowledgePage">
          KNOWLEDGE
          </a>

        <a href="https://www.facebook.com/pg/jnpfreelance/photos" target="_blank">
          PORTFOLIO
          </a>

        <a onClick={this.onNavClick} href="#" data-target="ContactPage">
          CONTACT
          </a>
      </div>

    );
  }
}

export default Navigation;