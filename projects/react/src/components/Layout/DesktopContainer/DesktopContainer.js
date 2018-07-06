import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Banner from '../Banner';
import Navigation from '../Navigation';
import ProfileCard from '../ProfileCard';
import SocialNetworks from '../SocialNetworks';
import Footer from '../Footer';
import './DesktopContainer.css';

class DesktopContainer extends Component {
  render() {
    const { children } = this.props;

    return (
      <Segment basic className="desktop-wrapper">
        <Segment basic className="desktop-banner-wrapper">
          <Banner />
        </Segment>
        <Segment className="desktop-content-wrapper" basic>
          {children}
        </Segment>
        <Segment
          inverted
          className="desktop-navigation-wrapper"
          color="blue"
          basic
        >
          <ProfileCard />
          <Navigation />
          <SocialNetworks />
        </Segment>
        <Segment basic className="desktop-footer-wrapper">
          <Footer />
        </Segment>
      </Segment>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

export default DesktopContainer;
