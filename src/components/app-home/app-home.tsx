import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          My name is Alex Merced and I'm a developer who loves learning,
          training, and building applications. I've built backend and frontend
          applications, I've trained others to build backend and frontend, and
          I've built libraries to assist others in developing backend and
          frontend applications. I love code, and I'd be excited to apply my
          passion to your next project. I would be excited to see if I can
          assist with your development project or team. Contact me at
          Alex@AlexMerced.dev
        </p>
      </div>
    );
  }
}
