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
          Alex Merced is web developer with knowledge and experience in front-end and back-end development. From plain vanilla HTML/CSS/JS to Express/React/Angular and more. This particular SPA is created using the StecilJS Compiler.<br/><br/>

          Contact Alex Merced to assist with your development project at Alex@AlexMerced.dev
        </p>

        <stencil-route-link url='/profile/'>
          <button>
            Profile page
          </button>
        </stencil-route-link>

        <stencil-route-link url='/blog/'>
          <button>
            Blog
          </button>
        </stencil-route-link>

      </div>
    );
  }
}
