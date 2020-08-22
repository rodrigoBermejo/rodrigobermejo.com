import React, { Component } from "react";
import PropTypes from "prop-types";

class SocialNetworks extends Component {
  render() {
    let socialNetworksData = this.props.socialNetworksData;
    return (
      <ul className="social">
        {socialNetworksData.map((item, i) => {
          return (
            <li key={i}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <i className={item.class} />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

SocialNetworks.propTypes = {
  socialNetworksData: PropTypes.array.isRequired
};

export default SocialNetworks;
