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
            A platform initiative for effective co-ordinations of clubs and events at campus. We at MaceHub tries to bring you, students what is happening in the college along with informations about clubs, clubs or organisation the technical support you have been looking forward to expand yourself.
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
              href="javascript:window.scrollTo({ behavior: 'smooth', top: document.getElementById('opps-in-mace').offsetTop })"
              thumb="img/quicklinks/opp.png"
              thumbAlt="Opportunities In MACE"
              /> 
               
               
            <QuickLink 
              label = "Macehub Archives"
              subLabel = "Have a glance into the collection of archived websites."
              href="http://archive.macehub.in/"
              thumb="img/quicklinks/cloud.png"
              thumbAlt="Opportunities In MACE"
              />    
              
            <QuickLink 
              label = "Team Macehub"
              subLabel = "The team who made the macehub dream true."
              href="team"
              thumb="img/quicklinks/team.jpg"
              thumbAlt="Opportunities In MACE"
              />    

            <QuickLink 
              label = "Contribute to Macehub"
              subLabel = "Hive your hand of help to this platform and our various activities."
              href="contribute"
              thumb="img/quicklinks/cont.png"
              thumbAlt="Contribute to Macehub"
              />    

          </Col>
        </Row>
      </Container>
    </header>
  );
}