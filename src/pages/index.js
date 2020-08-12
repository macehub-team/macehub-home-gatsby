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
      </Helmet>
      <HomeIntro/>
      <OppurtunitiesInMace/>
    </div>
  );
}