import React, { Component } from 'react';
import PropTypes from "prop-types";
import Navigation from "./Navigation";
import SocialNetworks from './SocialNetworks';

class Header extends Component {
  render() {
    let headerData = this.props.headerData;
    return (
      <header id="home">
        <Navigation navigationData={headerData.navigation} />
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am {headerData.name}</h1>
            <h3>{headerData.role}</h3>
            <h3>{headerData.roleDescription}</h3>
            <hr />
            <SocialNetworks socialNetworksData={headerData.socialNetworks} />
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  headerData: PropTypes.array.isRequired,
}

export default Header;
