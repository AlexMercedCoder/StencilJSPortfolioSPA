import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'am-wp-blog',
  styleUrl: 'wp-blog.css',
  shadow: true
})
export class WpBlog {
    @State () posts:Array<any>;

    componentWillLoad() {

        fetch('https://wp.workspace1985.xyz/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.posts = data;
            console.log(this.posts);})


    }

  render() {
    return (
      <div class="blogs">

        <p>Below are excerpts from my wordpress blog. I created a wordpress multi-site install on a Google Cloud instance to get more familiar with configuring a VPS and the Google Cloud Console.</p>

        {this.posts.map((post) => (
            <div>
            <h1> {post.title.rendered} </h1>
            <p> {post.excerpt.rendered} </p>
            <a href={post.link}><button>Full Post</button></a>
            </div>
        )        )}

      </div>
    );
  }

}
