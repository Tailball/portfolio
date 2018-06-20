import React from "react";

class KnowledgePage extends React.Component {
  render() {
    return <section id="KnowledgePage">
      <h1 className="textTitle">my skills</h1>
      <h2 className="subTitle">I have experience in following technical areas:</h2>

      <div className="knowledgecontainer knowledgecontainer__branch">
        <h3>Web</h3>
        <ul>
          <li>Visual studio code</li>
          <li>HTML5, CSS3, Javascript ECMA 6, SASS</li>
          <li>Twitter Bootstrap</li>
          <li>jQuery</li>
          <li>React.js, React-Router, Redux</li>
          <li>Node.js, NPM</li>
          <li>Node Express</li>
          <li>MongoDB (Mongoose)</li>
          <li>JEST</li>
          <li>GIT, Heroku, mLab, AWS</li>
        </ul>
      </div>

      <div className="knowledgecontainer knowledgecontainer__branch">
        <h3>Graphics, Games &amp; Animation</h3>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Unity 3d</li>
          <li>Cyberlink PowerDirector</li>
          <li>Autodesk 3ds Max</li>
          <li>Pen &amp; Pater drawing (iOS ProCreate)</li>
        </ul>
      </div>

      <div className="knowledgecontainer knowledgecontainer__branch">
        <h3>Microsoft .NET</h3>
        <ul>
          <li>C# and VB.NET</li>
          <li>Visual Studio and TFS</li>
          <li>ASP.NET MVC</li>
          <li>WPF and MVVM</li>
          <li>T-SQL, ADO.NET, LINQ, EntityFramework</li>
          <li>SQL Server and Management Studio</li>
          <li>SSIS</li>
          <li>Xamarin</li>
        </ul>
      </div>

      <div className="knowledgecontainer knowledgecontainer__branch">
        <h3>Methodologies &amp; philosophies</h3>
        <ul>
          <li>Object oriented programming (OOP)</li>
          <li>Multi tier design (n-tier)</li>
          <li>Database modeling and design</li>
          <li>Asynchronous programming</li>
          <li>Test-driven development (TDD)</li>
          <li>Agile / SCRUM</li>
        </ul>
      </div>

      <div className="knowledgecontainer knowledgecontainer__branch">
        <h3>Other</h3>
        <ul>
          <li>Microsoft Excel</li>
          <li>Microsoft Word</li>
          <li>Microsoft Access</li>
          <li>Microsoft Powerpoint</li>
          <li>Visual Basic for applications (VBA)</li>
          <li>Flatfile data notation (CSV, XML, JSON)</li>
          <li>iTextSharp</li>
        </ul>
      </div>
    </section>;
  }
}

export default KnowledgePage;
