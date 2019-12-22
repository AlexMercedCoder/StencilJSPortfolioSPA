import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'meet-alex',
  styleUrl: 'alex.css',
  shadow: true
})
export class Alex {

  render() {
    return (
      <Host>
      <h1>Meet Alex with the video below...</h1>
        <iframe src="https://www.youtube.com/embed/yfCZXLbOVEI" frameborder="0" ></iframe>
      </Host>
    );
  }

}
