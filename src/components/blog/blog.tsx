import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'am-blog',
  styleUrl: 'blog.css',
  shadow: true
})
export class Blog {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
