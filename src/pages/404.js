import React from "react";
import { Helmet } from "react-helmet"

import './../scss/macehub.scss';

export default function Home() {
  return (
    <div class="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome to Macehub</title>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" integrity="sha512-u7ppO4TLg4v6EY8yQ6T6d66inT0daGyTodAi6ycbw9+/AU8KMLAF7Z7YGKPMRA96v7t+c7O1s6YCTGkok6p9ZA==" crossorigin="anonymous" />
      </Helmet>
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}>
        <div className="text-center">
            <h1 style={{color:'#1b96d0',fontSize:'5rem'}}>404</h1>
            <h5 style={{color:'black'}}>Page Not Found</h5>
            <img src="/img/logo.png" style={{width:'120px',marginTop:'100px'}} alt="Macehub Logo"/>
        </div>
      </div>
    </div>
  );
}