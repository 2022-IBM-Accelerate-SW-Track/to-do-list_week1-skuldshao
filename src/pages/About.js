import React, { Component } from 'react';
import "./About.css";
import skuldshao from "../assets/skuldshao.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={skuldshao}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Skuld Shao</div>
        <div className="brief_description">
        Fun Fact: I'm a big fan of puzzle games and enjoy cooking in my free time!
        Please feel free to recommend any restaurants you like in the Bay Area to me :). 
        I love to communicate with people with diverse backgrounds, listen to their stories, 
        and learn about their culture and languages.
        I'm also an animal lover and wish to be a cat mother this year!
        </div>
      </div>
    </div>
  </div>
 
      </div>
    )
  }
}
