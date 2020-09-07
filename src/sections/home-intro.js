import React from "react"

import {Container,Row,Col} from 'react-bootstrap';

import QuickLink from './../components/QuickLink.js'

export default function HomeIntro() {
  return (
    <header className="masthead  d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center" id="intro">
            <img src="img/logo.png" className="logo-main" alt="Logo"/>
            <p>
            A platform initiative for effective co-ordinations of clubs and events at campuses. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget sodales dui. Nulla in egestas magna. Fusce rhoncus auctor lacus in interdum.
            </p>
            <span className="star-break"></span>
            <a href="mailto:info@macehub.in" className="text-dark">info@macehub.in</a>
          </Col>
          <Col md={6} lg={{ span: 4,  offset: 1 }} id="quicklinks">          
            <h6 className="text-muted mb-4">QUICK LINKS</h6>

            
            <QuickLink 
              label = "Official Website of Mar Athanasius College of Engineering"
              subLabel = "www.mace.ac.in"
              href="https://www.mace.ac.in"
              thumb="img/quicklinks/mace.png"
              newTab={true}
              thumbAlt="Mar Athanasius College of Engineering official Logo"
              />

            <QuickLink 
              label = "Macehub Faculty App"
              subLabel = "Android app to access details of MACE faculties. Exclusive for MACEians"
              href="https://play.google.com/store/apps/details?id=com.macehub.faculty"
              thumb="img/quicklinks/h_app.png"
              newTab={true}
              thumbAlt="Macehub Faculty App Link"
              />    

            <QuickLink 
              label = "Opportunities In MACE"
              subLabel = "Explore and join in extra curricular oppurtunities in our college."
              href="#"
              thumb="img/quicklinks/opp.png"
              thumbAlt="Opportunities In MACE"
              />    

            <QuickLink 
              label = "Contribute to Macehub"
              subLabel = "Hive your hand of help to this platform and our various activities."
              href="#"
              thumb="img/quicklinks/cont.png"
              thumbAlt="Contribute to Macehub"
              />    

          </Col>
        </Row>
      </Container>
    </header>
  );
}