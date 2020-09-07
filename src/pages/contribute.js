import React from "react";
import { Helmet } from "react-helmet"

import './../scss/macehub.scss';

import {Container, Row,Col} from 'react-bootstrap';
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
          Macehub is non profit. Also<br/>
          <br/><br/>
          If you wish to contribute, please inform us through <a href="mailto:info@macehub.in">info@macehub.in</a>
          
        </p>
      </Container>
    </section>
    </div>
  );
}