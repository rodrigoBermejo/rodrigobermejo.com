import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Menu,
  Segment,
  Sidebar,
  Header,
  Icon,
  Responsive
} from 'semantic-ui-react';
import Banner from '../Banner';
import Navigation from '../Navigation';
import ProfileCard from '../ProfileCard';
import Footer from '../Footer';
import SocialNetworks from '../SocialNetworks';

class MobileContainer extends Component {
  state = { toggleMenuState: false };

  toggleVisibility = () => {
    this.setState({ toggleMenuState: !this.state.toggleMenuState });
  };

  render() {
    const { children } = this.props;
    const { toggleMenuState } = this.state;

    return (
      <Responsive maxWidth={992}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="slide along"
            direction="right"
            visible={toggleMenuState}
            icon="labeled"
            vertical
            width="wide"
            inverted
          >
            <Menu.Item
              as={Menu}
              secondary
              size="large"
              className="mobile-header"
            >
              <Menu.Item>
                <Header as="h4">Rodrigo Leaños Bermejo</Header>
              </Menu.Item>
              <Menu.Item position="right" onClick={this.toggleVisibility}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu.Item>
            <Menu.Item>
              <ProfileCard />
            </Menu.Item>
            <Menu.Item>
              <Navigation />
            </Menu.Item>
            <Menu.Item>
              <SocialNetworks />
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher as={Segment} basic vertical>
            <Menu secondary className="mobile-header">
              <Menu.Item>
                <Header as="h4">Rodrigo Leaños Bermejo</Header>
              </Menu.Item>
              <Menu.Item position="right" onClick={this.toggleVisibility}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu>
            <Banner />
            {children}
            <Footer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

export default MobileContainer;
