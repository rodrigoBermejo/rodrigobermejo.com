import React, { Component } from 'react';
import PropTypes from "prop-types";

class Navigation extends Component {
  render() {
    let navigationData = this.props.navigationData;
    return (
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
        <ul id="nav" className="nav">
          {navigationData.map(item => {
            return (
              <li className="current">
                <a className="smoothscroll" href={item.url}>{item.name}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  navigationData: PropTypes.array.isRequired,
}

export default Navigation;
