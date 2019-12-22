import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {


  render() {
      return (
        [
        <div class="app-profile">
            <img src="../../../assets/image.jpg"/>
            <p>
            <span>Languages:</span> Javascript, Python, GO, Ruby, C#, PHP, Swift, Kotlin<br/><br/><br/>
            <span>Front-end:</span> React/Redux, Angular, Vue, Stencil, Svelte, HTML, CSS, SASS<br/><br/><br/>
            <span>Back-end:</span> Express, Koa, Django, Flask, FoalTS, NextJS, Gatsby, EJS, Nunjucks, NuxtJS<br/><br/><br/>
            <span>CMS/LMS:</span> Wordpress, Moodle<br/><br/><br/>
            <span> Key Articles from Wordpress Blog</span><br/>
            *Wordpress Multi-Site installed by myself on a Google Cloud VPS<br/><br/>
            <a href='https://wp.workspace1985.xyz/blog/2019/12/05/general-assembly-and-my-web-dev-origin-story/'>General Assembly and my Developer Origin Story</a><br/><br/>
            <a href='https://wp.workspace1985.xyz/blog/2019/11/12/creating-blogs-and-learning-web-development/'>Learning Web Development by Building Blogs</a><br/><br/>
            <a href='https://wp.workspace1985.xyz/blog/category/my-developer-story/'>The rest of my developer story</a><br/><br/>
            </p>
            <p> <span> Featured Project </span>
            <am-card cardImage="https://i.imgur.com/vWCc9ot.png" cardtitle="devNursery" link1="https://github.com/AlexMercedCoder/devNurserySvelteBlogApp" linkText1="git"
            link2="https://www.devnursery.com" linkText2="live"/>
            </p>
        </div>,

        <div class="cardContainer">

        <am-card cardImage="https://i.imgur.com/sRcGAXe.png" cardtitle="Savvy Hotspots" link1="https://github.com/AlexMercedCoder/SavvyBackendAPI" linkText1="git"
        link2="https://savvyhotspots.netlify.com/" linkText2="live"/>

        <am-card cardImage="https://i.imgur.com/MLcgfsf.png" cardtitle="BetterBoxD" link1="https://github.com/Jordan-Morales/betterboxd" linkText1="git"
        link2="https://betterboxd.herokuapp.com/" linkText2="live"/>

        <am-card cardImage="https://i.imgur.com/MB0HIYm.png" cardtitle="Bookmark App" link1="https://github.com/AlexMercedCoder/bookmarkApp" linkText1="git"
        link2="https://hidden-oasis-38675.herokuapp.com/" linkText2="live"/>

        <am-card cardImage="https://i.imgur.com/iNNwWQs.png" cardtitle="Address Book" link1="https://github.com/AlexMercedCoder/CodersChoice-GroupProject" linkText1="git"
        link2="https://nameless-brushlands-10319.herokuapp.com/" linkText2="live"/>

        <am-card cardImage="http://www.alexmercedcoder.com/evevol.png" cardtitle="Volunteer Coordinator" link1="https://github.com/AlexMercedCoder/Unit2EveVol" linkText1="git"
        link2="https://shrouded-beach-63520.herokuapp.com/" linkText2="live"/>

        <am-card cardImage="https://i.imgur.com/aAQyVp1.jpg" cardtitle="Pet Adoption App" link1="https://github.com/AlexMercedCoder/GABootcampProjects" linkText1="git"
        link2="https://alexmercedcoder.github.io/petadoptionapp/" linkText2="live"/>

        <am-card cardImage="https://i.imgur.com/NPV7bmk.png" cardtitle="Calculator" link1="https://github.com/AlexMercedCoder/GABootcampProjects" linkText1="git"
        link2="https://optimistic-lamarr-1dc751.netlify.com/" linkText2="live"/>

        <am-card cardImage="https://i.imgur.com/rtY5MTr.png" cardtitle="TODO List" link1="https://github.com/AlexMercedCoder/GABootcampProjects" linkText1="git"
        link2="https://xenodochial-beaver-d27eca.netlify.com/" linkText2="live"/>

        <am-card cardImage="https://i.imgur.com/F3mFQzR.jpg" cardtitle="Bill & Ted Tic Tac Toe" link1="https://github.com/AlexMercedCoder/GABootcampProjects" linkText1="git"
        link2="https://stoic-stonebraker-80dd15.netlify.com/" linkText2="live"/>
        </div>
    ]
      );
  }
}
