import React, { Component } from 'react';
import { Image, Header, Segment } from 'semantic-ui-react';
import ImageProfile from '../../assets/avatar.png';

class ProfileCard extends Component {
  render() {
    return (
      <Segment textAlign="center" fluid vertical inverted color="blue">
        <Image src={ImageProfile} alt="Rodrigo Leaños Bermejo" wrapped />
        <Header as="h3">Rodrigo Leaños Bermejo</Header>
        <Header as="h4">SharePoint Specialist</Header>
        <Header as="h5">Information Technology and Services</Header>
      </Segment>
    );
  }
}

export default ProfileCard;
