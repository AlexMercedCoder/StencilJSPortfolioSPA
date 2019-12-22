import { Component, h } from '@stencil/core';

@Component({
  tag: 'am-resume',
  styleUrl: 'resume.css',
  shadow: true
})
export class Resume {

  render() {
    return (
     <div class="resume">
     <h3>SKILLS</h3>
     <p>Languages​ : HTML, CSS, Javascript, Python, PHP, Ruby, C#, Kotlin, Swift, GO, Clojure, Elixir</p>
     <p>Frameworks​ : Materialize, Django, NodeJS, React, Angular, Redux, Bootstrap, StencilJS, KOA, Sass, EJS, Nunjucks, Jinja, Vue, Nuxt, Svelte</p>
     <p>Database:​ MongoDB, Postgres, MySQL, SQLite</p>
     <p>Other​ : Online Media Production, Sound/Video Production, Public Speaking, Training, Spanish Language, AWS Labmda and Elastic Beanstalk, VPS (Google Cloud, Digital Ocean, Linode)</p>
     <h3>PROGRAMMING EXPERIENCE</h3>
     <p>=> Created web developer online community, devNursery.com using AWS Lambda, Express, Mongo, React, Svelte, Vue, Typescript and Nuxt.</p>
     <p>=> Created Savannah Tourism app, Savvy Hotspots, using React, PHP and Postgres</p>
     <p>=> Designed responsive web apps using HTML/CSS/Javascript result in a ​ Pet Adoption App​ , ​ Calculator​ and ​ To-Do app</p>
     <p>=> Designed full-stack applications using Express/Node/Mongo such as this ​ event volunteer coordinator app​ .</p>
     <p>=> Created ​ several blog applications​ using Python/Django, Contentful Headless CMS, ExpressJS and KoaJS</p>
     <p>=> Created ​ several video series​ to teach the basics of programming languages Javascript, Python, Ruby, C#, Dart, Elixir, Clojure, Kotlin, Swift and Go, Frameworks like KoaJS, Node, StencilJS and computer science concepts such as Sorting Algorithms and Data Structures to teach others and reinforce my own knowledge and skills.</p>
     <h3>EDUCATION</h3>
     <h4>Software Engineering Immersive, General Assembly</h4>
     <p>Three-month, 500-hour full-time and full-stack program conducted in a remote setting, providing experience with the
     latest front- and back-end programming languages, tools, and methodologies including: HTML, CSS, SASS, Javascript,
     jQuery, PostgreSQL, MongoDB, PHP, AngularJS, NodeJS, ReactJS, Wordpress, Git, Github, and Agile/Scrum.</p>
    <h4> Bachelor of Arts (Culture Studies/Marketing), ​ Bowling Green State U</h4>
     <p>*coursework in C++</p>
     <h4>HS Diploma/Microcomputer Certification, Howell Cheney Tech</h4>
    <p>*Took C++ Coursework</p>
    <p>*Member of Robotics and Math Teams</p>
    <h4>Skillshare Coursework</h4>
    <p>Complete Bootstrap & Materialize Course, Programming in Python 3, Try Django: Learn Python Web Programming,
    Learn React Fundamentals, Full Stack Web Dev Part 1-4, The Node.JS Masterclass, Learn UX/UI Design in Adobe XD, Get
    started with SASS</p>
    <h4>Sololearn Tutorial Certificates</h4>
    <p>Html, CSS, Javascript, C, C++, C#, Java, Ruby, Swift, Jquery, Python</p>
    <h3>EXPERIENCE</h3>
    <h4>Greico Financial Training | 05/2008 – 09/2019</h4>
    <h5>Training Specialist</h5>
    <p>- Worked directly under the CEO in all aspects of business operations including marketing and accounting.</p>
    <p>- Developed and delivered online and live training to financial professionals of all levels around the world.</p>
    <p>- Managed the website content and updates along with email and social media marketing</p>
    <p>- Worked closely with our web CMS (Bigcommerce) and LMS (WizIQ) to create our website and eLearning content</p>
     </div>
    );
  }

}
