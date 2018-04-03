import React, { Component } from 'react';
import Layout from '../Layout';
import { axen, definityFirst, isavanzados, softtek } from '../assets';
import { Image, Grid, Header, Segment } from 'semantic-ui-react';

class Experience extends Component {
  render() {
    return (
      <Segment>
        <Grid divided="vertically">
          <Grid.Row columns={3}>
            <Grid.Column textAlign="center" width={2}>
              <Image wrapped src={definityFirst} />
            </Grid.Column>
            <Grid.Column textAlign="left" width={4}>
              <Header as="h4">Portals & Collaboration Engineer</Header>
              <span>
                Definity First<br />Monterrey, México<br />Feb 2016 - Present
              </span>
            </Grid.Column>
            <Grid.Column textAlign="justified" width={10}>
              <p>
                Implemented multi-lingual web sites using site variation
                management system provided by Microsoft SharePoint Server 2016<br />Created
                sites, built custom workflows, and managed permissions and
                content as requested from customers<br />Implemented useful
                SharePoint capabilities out-of-the-box and complement with other
                libraries such as jQuery to create custom enhancements on
                current sites for customer satisfaction and efficiency<br />Conducted
                formal and informal meetings with multiple groups to gathered
                requirements and provide solutions to existing problems<br />Constructed
                multiple sub-sites, pages, and libraries with the deployment of
                the new SharePoint sites<br />SharePoint Versions:
                2010,2013,2016, Online.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column textAlign="center" width={2}>
              <Image wrapped src={softtek} />
            </Grid.Column>
            <Grid.Column textAlign="left" width={4}>
              <Header as="h4">Senior Software Development Engineer</Header>
              <span>
                Softtek México<br />Aguascalientes, México<br />Jun 2015 - Jan
                2016
              </span>
            </Grid.Column>
            <Grid.Column textAlign="justified" width={10}>
              <p>
                Develop of new functionality and control change of different
                applications based in .NET, SQL Server and Oracle for an
                important software company that delivers business automation and
                process solutions for health plans (Medicare, Medicaid, and ACO
                business)
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column textAlign="center" width={2}>
              <Image wrapped src={axen} />
            </Grid.Column>
            <Grid.Column textAlign="left" width={4}>
              <Header as="h4">Senior Sharepoint Consultant</Header>
              <span>
                AXEN IT Consulting<br />Monterrey, México<br />Oct 2012 - Jun
                2015
              </span>
            </Grid.Column>
            <Grid.Column textAlign="justified" width={10}>
              <p>
                Project at an important company of retail dedicated to home
                improvement. Following Microsoft best practices for improving
                the existing SharePoint environment. The process involved the
                implementation of Newsgator (Sitrion) and Developed new
                SharePoint based business systems.<br />Developed SharePoint
                assets such as Web Parts, Event Handlers, Application Pages,
                Workflows, aiming the improvement of existing SharePoint
                functionalities.<br />Project inside AXEN. Developed SharePoint
                assets such as Web Parts, Event Handlers, Application Pages,
                Workflows, aiming the improvement of existing SharePoint
                functionalities.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column textAlign="center" width={2}>
              <Image wrapped src={isavanzados} />
            </Grid.Column>
            <Grid.Column textAlign="left" width={4}>
              <Header as="h4">SharePoint Team Lead</Header>
              <span>
                Ingeniería en Sistemas Avanzados del Centro S.A. de .C.V.<br />Aguascalientes,
                México<br />Apr 2009 - Aug 2012
              </span>
            </Grid.Column>
            <Grid.Column textAlign="justified" width={10}>
              <p>
                Designed, Developed and Implemented Intranet systems based on
                the SharePoint 2007 platform, both WSS 3.0 and MOSS 2007.<br />Developed
                new functionalities such as Web Parts, Event Handlers,
                Application Pages, Workflows, and other SharePoint assets aiming
                system environments based on Microsoft SharePoint 2007 and 2010.<br />Performed
                both maintenance on existing SharePoint 2007 and 2010
                applications and SharePoint 2007 to SharePoint 2010 migrations.<br />Connected
                several different line of business applications to SharePoint
                using BDC, BCS, Web Services and custom development.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Layout(Experience);
