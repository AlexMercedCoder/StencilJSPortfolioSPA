import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'am-wp-blog',
  styleUrl: 'wp-blog.css',
  shadow: true
})
export class WpBlog {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
