import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <Segment basic fluid inverted textAlign="center" color="grey">
        <Header as="h5">
          © Rodrigo Bermejo. All rights reserved | SharePoint Specialist
        </Header>
      </Segment>
    );
  }
}

export default Footer;
