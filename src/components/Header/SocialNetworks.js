import React, { Component } from 'react';
import PropTypes from "prop-types";

class SocialNetworks extends Component {
  render() {
    let socialNetworksData = this.props.socialNetworksData;
    return (
      <ul className="social">
        {socialNetworksData.map(item => {
          return(
            <li>
              <a href={item.url} target="_blank" >
                <i className={item.class} />
              </a>
            </li>
          )
        })}
      </ul>
    );
  }
}

SocialNetworks.propTypes = {
  socialNetworksData: PropTypes.object.isRequired,
}

export default SocialNetworks;
