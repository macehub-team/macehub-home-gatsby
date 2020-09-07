import React from "react"

import {Container,Row,Col} from 'react-bootstrap';

import TeamMember from './../components/TeamMember.js'
import SectionTitle from './../components/SectionTitle.js'

import TeamMembersData from './../content/team_data.yml';

export default function TeamSection() {
  return (
    <section id="team-macehub" style={{padding:"50px 0"}}>
      <Container>
        <SectionTitle title="Macehub " titleEnd="Team" marginBottom="4rem" />

        <Row>
          {TeamMembersData.team.map(data=>{
              return (<Col lg={3} md={6}>
                <TeamMember {...data} />
              </Col>);
            }
          )}
        </Row>
      </Container>
    </section>
  );
}