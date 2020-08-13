import React from "react";
import { Helmet } from "react-helmet"

import './../scss/macehub.scss';

import HomeIntro from './sections/home-intro.js';
import OppurtunitiesInMace from './sections/oppurtunities-in-mace.js';


export default function Home() {
  return (
    <div class="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome to Macehub</title>
        <link rel="shortcut icon" href="img/favicon.png" type="image/png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" integrity="sha512-u7ppO4TLg4v6EY8yQ6T6d66inT0daGyTodAi6ycbw9+/AU8KMLAF7Z7YGKPMRA96v7t+c7O1s6YCTGkok6p9ZA==" crossorigin="anonymous" />
      </Helmet>
      <HomeIntro/>
      <OppurtunitiesInMace/>
    </div>
  );
}