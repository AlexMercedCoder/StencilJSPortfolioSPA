import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'am-blog',
  styleUrl: 'blog.css',
  shadow: true
})
export class Blog {

    @State () posts:Array<any>;

    componentWillLoad() {

        fetch('https://cdn.contentful.com/spaces/wiothdq64tqj/environments/master/entries?access_token=fbY3krPsiW8hWQ4m7GysjrfCfBdeCP9gBLqh3klbO20')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.posts = data.items;
            console.log(this.posts);})


    }

  render() {
    return (
      <div class="blogs">

        <p>The blog below is a blog created using the headless CMS, Contentful, being served to this site their REST api. The purpose of this blog is to document my developer journey.</p>

        {this.posts.map((post) => (
            <div>
            <h1> {post.fields.blogTitle} </h1>
            <p> {post.fields.blogContent} </p>
            </div>
        )        )}

      </div>
    );
  }

}
