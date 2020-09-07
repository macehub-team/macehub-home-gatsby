import React from "react"

import {Container, Row,Col} from 'react-bootstrap';


import SectionTitle from './../components/SectionTitle.js'
import OpportunityBox from './../components/OpportunityBox.js'

import OpportunitiesData from './../content/opportunities_of_mace.yml';

export default function OppurtunitiesInMace() {
  return (
    <section id="opps-in-mace" style={{padding:"50px 0"}}>
      <Container>
        <SectionTitle title="Opportunities In " titleEnd="Mace" marginBottom="4rem" />
        <Row>
          {OpportunitiesData.opportunities.map(data=>{
              return (<Col lg={3} md={6}>
                <OpportunityBox {...data} />
              </Col>);
            }
          )}
        </Row>
      </Container>
    </section>
  );
}