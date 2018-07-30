import React, { Component } from 'react';
import Layout from '../Layout';
import { Segment, Header, Container } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <Segment>
        <Container textAlign="justified">
          <Header as="h2">Profile</Header>
          <p>
            Being a qualified .NET and SharePoint consultant since 2010, I have
            several years of experience in Software Development, with a special
            focus on collaboration and content management platforms, solution
            integration, and business intelligence. During this period I have
            also taken two Microsoft Certifications that ensure the
            technological accuracy. I'm particularly pleased to work with
            Microsoft technologies especially ASP.NET and C# and I'm always
            interested in new programming methods as well and new ways of doing
            things in a more efficient manner.
          </p>
        </Container>
      </Segment>
    );
  }
}

export default Layout(About);
