import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          I am a web developer with knowledge and experience in front-end and back-end development. From plain vanilla HTML/CSS/JS to Express/React/Angular and more. This particular SPA is created using the StencilJS web component compiler. The blog page is fed through my blog using the headless CMS, Contentful, and on my profile page you can find a list of projects along with links to key articles on my Wordpress blog.<br/><br/>

          Much of my free time is spent learning new technologies and reinforcing what I've learned by teaching others through my blogs, youtube channel, and podcast. This has shaped me into a quick learner and effective communicator that produces value for any team and project.<br/><br/>

          I would be excited to see if I can assist with your development project or team. Contact me at Alex@AlexMerced.dev
        </p>



      </div>
    );
  }
}
