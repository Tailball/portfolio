import React from 'react';
import scrollToElement from 'scroll-to-element';

class ServicePage extends React.Component {
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
    return <section id="ServicePage">
      <h1 className="textTitle">what can I do for you?</h1>

      <div className="serviceContainer serviceContainer__service">
        <h2>graphical design</h2>
        <p>
          <span>A sleek modern website</span>, designed and coded with an eye for responsive design?<br />
          <span>Posters</span> or <span>flyers</span>, completely in the style of your upcoming event?<br />
          Professional <span>business cards</span> or a new <span>logo</span> that is in line with your target audience?<br />
          Perhaps formal or informal <span>invitations</span> to a party...
          </p>
        <p>You name it, I will design it.</p>
        <p>
          If you want to see examples of my previous work, please take a look at my&nbsp;
            <a className="textLink"
            href="#PortfolioPage"
            onClick={this.onNavClick}
            data-target="PortfolioPage">
            portfolio
            </a>
        </p>
      </div>

      <div className="serviceContainer serviceContainer__service">
        <h2>web development</h2>
        <p>
          I am able to code your new website using the latest <span>web development techniques</span>:<br />
          <span>HTML5</span>, <span>CSS3</span>, <span>Javascript ES6</span> hold no secrets for me.<br />
          I am familiar with coding for both desktop and mobile devices.
          </p>
        <p>
          If you require more functionality on your website, I will help you build a client application using the <span>MERN technology</span> stack.
          </p>
        <p>
          In case you require <span>back-end</span> (server or database) work done, I will create a full-blown <span>REST API</span> for your application to connect to.
          </p>
        <p>
          If you want to see my technical skillset, please take a look at my&nbsp;
            <a className="textLink"
            href="#KnowledgePage"
            onClick={this.onNavClick}
            data-target="KnowledgePage">
            knowledge
            </a>.
          </p>
      </div>
    </section>;
  }
}

export default ServicePage;