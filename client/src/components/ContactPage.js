import React from 'react';

const ContactPage = () => (
  <section id="ContactPage">
    <h1 className="textTitle">contact me</h1>

    <p>
      this is a section where i can be contacted<br />You can even contact me
      some more
    </p>

    <video autoPlay loop muted>
      <source src="/videos/Home_work.mp4" type="video/mp4" />
      <source src="/videos/Home_work.webm" type="video/webm" />
      <source src="/videos/Home_work.ogv" type="video/ogv" />
    </video>
  </section>
);

export default ContactPage;