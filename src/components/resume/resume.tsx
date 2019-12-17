import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'am-resume',
  styleUrl: 'resume.css',
  shadow: true
})
export class Resume {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
