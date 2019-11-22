import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'am-card',
  styleUrl: 'card.css',
  shadow: true
})
export class Card {
    
    @Prop() cardImage: string;
    @Prop() cardtitle: string;
    @Prop() link1: string;
    @Prop() linkText1: string;
    @Prop() link2: string;
    @Prop() linkText2: string;


  render() {
    return (
    <div class="maincont">

        <div class="maintext">
            <img src={this.cardImage}/>
        </div>

        <p>{this.cardtitle}</p>

        <div class="linkbox">

            <div class="link">
                <a href={this.link1}>{this.linkText1}</a>
            </div>

            <div class="link">
                <a href={this.link2}>{this.linkText2}</a>
            </div>

        </div>
    </div>

    )
  }

}
