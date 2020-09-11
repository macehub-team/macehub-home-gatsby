import React from "react";
import { Helmet } from "react-helmet"

import './../scss/macehub.scss';

import {Container} from 'react-bootstrap';
import SectionTitle from './../components/SectionTitle.js'


export default function Home() {
  return (
    <div class="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Team Macehub</title>
        <link rel="shortcut icon" href="img/favicon.png" type="image/png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" integrity="sha512-u7ppO4TLg4v6EY8yQ6T6d66inT0daGyTodAi6ycbw9+/AU8KMLAF7Z7YGKPMRA96v7t+c7O1s6YCTGkok6p9ZA==" crossorigin="anonymous" />
      </Helmet>
      <section id="contribute" style={{padding:"50px 0"}}>
      <Container>
        <SectionTitle title="Contribute to " titleEnd="Macehub" marginBottom="4rem" />

        <p>
        Macehub is a <strong>Not For Profit</strong> community designed to satisfy the technical needs of MACE <em>Students and Organisation</em>. We aren't generating any revenue from our products or services. This doesn't imply we are free of expenses, it costs us about <strong>₹5000 anually</strong> as technical charges( for Server, Domain and etc.. ). Macehub runs this services as part of holistic vision to empower MACE on the technical grounds.<br/>
          <br/><br/>
          If you wish to contribute or support, please inform us through <a href="mailto:info@macehub.in">info@macehub.in</a>
          <br/><br/>
          <em>Every little drop of water counts.</em>
        </p>
      </Container>
    </section>
    </div>
  );
}