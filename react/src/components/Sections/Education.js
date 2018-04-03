import React, { Component } from 'react';
import Layout from '../Layout';
import { upa, MCTSSP10AppDevB, MSCertProB } from '../assets';
import { Grid, Icon, Image, Header, Segment } from 'semantic-ui-react';

class Education extends Component {
  render() {
    return (
      <Segment>
        <Grid divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as="h3">
                <Icon name="student" />
                <Header.Content>Education</Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={5}>
              <Image wrapped className="logo-education" src={upa} />
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">
                <Header.Content
                  as="a"
                  href="http://www.upa.edu.mx/"
                  target="_blank"
                >
                  Universidad Politécnica de Aguascalientes
                </Header.Content>
              </Header>
              <Header as="h5">Bachelor’s Degree</Header>
              <span>Strategic Information Systems Engineering</span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as="h3">
                <Icon name="windows" />
                <Header.Content
                  as="a"
                  href="http://www.mycertprofile.com/Profile/4366803954"
                  target="_blank"
                >
                  Microsoft Certification Profile
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={5}>
              <Image wrapped className="logo-education" src={MCTSSP10AppDevB} />
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">
                573 TS: Microsoft SharePoint 2010, Application Development
              </Header>
              <span>Apr 2012 – Present</span>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={5}>
              <Image wrapped className="logo-education" src={MSCertProB} />
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">
                536 TS: Microsoft .NET Framework - Application Development
                Foundation
              </Header>
              <span>Aug 2008 – Present</span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Layout(Education);
