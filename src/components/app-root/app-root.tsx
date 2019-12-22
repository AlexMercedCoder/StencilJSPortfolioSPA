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
        <div class="buttons">

        <stencil-route-link url='/meet/'>
          <button>
            Meet Alex Video
          </button>
        </stencil-route-link>

        <stencil-route-link url='/profile/'>
          <button>
            Profile/Projects
          </button>
        </stencil-route-link>

        <stencil-route-link url='/blog/'>
          <button>
            Contentful Blog
          </button>
        </stencil-route-link>
        <stencil-route-link url='/wpblog/'>
          <button>
            Wordpress Blog
          </button>
        </stencil-route-link>
        <stencil-route-link url='/resume/'>
          <button>
            Resume
          </button>
        </stencil-route-link>

        <a href='https://sites.google.com/view/ambootcampprojects/home'><button>
        Bootcamp Gallery
        </button></a>
        </div>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/' component='app-profile' />
              <stencil-route url='/blog/' component='am-blog' />
              <stencil-route url='/wpblog/' component='am-wp-blog' />
              <stencil-route url='/resume/' component='am-resume' />
              <stencil-route url='/meet/' component='meet-alex' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
// <a href='https://www.scribd.com/document/439051181/Alex-Merced-Web-Developer-Resume-Final'><button>
// Resume
// </button></a>
