import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div class="hero">
        <header>
          <h1><stencil-route-link url='/'>Alex Merced's Portfolio Page</stencil-route-link></h1>
          <ul>
            <li ><a href="http://www.github.com/alexmercedcoder">Github</a></li>
            <li ><a href="http://www.linkedin.com/in/alexmerced">LinkedIn</a></li>
            <li ><a href="https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ">Youtube</a></li>
            <li ><a href="https://dev.to/alexmercedcoder">Dev.to</a></li>
          </ul>
        </header>

        <div >
            <h1>Alex Merced</h1>
            <h3>Web Developer</h3>
        </div>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/' component='app-profile' />
              <stencil-route url='/blog/' component='am-blog' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
