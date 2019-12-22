/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AmBlog {}
  interface AmCard {
    'cardImage': string;
    'cardtitle': string;
    'link1': string;
    'link2': string;
    'linkText1': string;
    'linkText2': string;
  }
  interface AmResume {}
  interface AmWpBlog {}
  interface AppHome {}
  interface AppProfile {}
  interface AppRoot {}
  interface MeetAlex {}
}

declare global {


  interface HTMLAmBlogElement extends Components.AmBlog, HTMLStencilElement {}
  var HTMLAmBlogElement: {
    prototype: HTMLAmBlogElement;
    new (): HTMLAmBlogElement;
  };

  interface HTMLAmCardElement extends Components.AmCard, HTMLStencilElement {}
  var HTMLAmCardElement: {
    prototype: HTMLAmCardElement;
    new (): HTMLAmCardElement;
  };

  interface HTMLAmResumeElement extends Components.AmResume, HTMLStencilElement {}
  var HTMLAmResumeElement: {
    prototype: HTMLAmResumeElement;
    new (): HTMLAmResumeElement;
  };

  interface HTMLAmWpBlogElement extends Components.AmWpBlog, HTMLStencilElement {}
  var HTMLAmWpBlogElement: {
    prototype: HTMLAmWpBlogElement;
    new (): HTMLAmWpBlogElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLMeetAlexElement extends Components.MeetAlex, HTMLStencilElement {}
  var HTMLMeetAlexElement: {
    prototype: HTMLMeetAlexElement;
    new (): HTMLMeetAlexElement;
  };
  interface HTMLElementTagNameMap {
    'am-blog': HTMLAmBlogElement;
    'am-card': HTMLAmCardElement;
    'am-resume': HTMLAmResumeElement;
    'am-wp-blog': HTMLAmWpBlogElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'meet-alex': HTMLMeetAlexElement;
  }
}

declare namespace LocalJSX {
  interface AmBlog {}
  interface AmCard {
    'cardImage'?: string;
    'cardtitle'?: string;
    'link1'?: string;
    'link2'?: string;
    'linkText1'?: string;
    'linkText2'?: string;
  }
  interface AmResume {}
  interface AmWpBlog {}
  interface AppHome {}
  interface AppProfile {}
  interface AppRoot {}
  interface MeetAlex {}

  interface IntrinsicElements {
    'am-blog': AmBlog;
    'am-card': AmCard;
    'am-resume': AmResume;
    'am-wp-blog': AmWpBlog;
    'app-home': AppHome;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'meet-alex': MeetAlex;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'am-blog': LocalJSX.AmBlog & JSXBase.HTMLAttributes<HTMLAmBlogElement>;
      'am-card': LocalJSX.AmCard & JSXBase.HTMLAttributes<HTMLAmCardElement>;
      'am-resume': LocalJSX.AmResume & JSXBase.HTMLAttributes<HTMLAmResumeElement>;
      'am-wp-blog': LocalJSX.AmWpBlog & JSXBase.HTMLAttributes<HTMLAmWpBlogElement>;
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'meet-alex': LocalJSX.MeetAlex & JSXBase.HTMLAttributes<HTMLMeetAlexElement>;
    }
  }
}


