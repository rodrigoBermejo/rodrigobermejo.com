import React, { Component } from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import { Segment, Responsive } from 'semantic-ui-react';

function Layout(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <Segment.Group className="general-wrapper">
          <Responsive as={DesktopContainer} minWidth={993}>
            <WrappedComponent />
          </Responsive>
          <Responsive as={MobileContainer} maxWidth={992}>
            <WrappedComponent />
          </Responsive>
        </Segment.Group>
      );
    }
  };
}

export default Layout;
