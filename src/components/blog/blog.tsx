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
