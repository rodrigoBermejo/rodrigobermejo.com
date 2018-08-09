import React, { Component } from "react";
import PropTypes from "prop-types";

class About extends Component {
  render() {
    let aboutData = this.props.aboutData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={aboutData.profileImg}
              alt={aboutData.name}
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              <span>{aboutData.profile}</span>
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{aboutData.name}</span>
                  <br />
                  <span>{aboutData.ubication}</span>
                  <br />
                  <span>{aboutData.mail}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={aboutData.cvUrl} className="button">
                    <i className="fa fa-download" />Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

About.propTypes = {
  aboutData: PropTypes.object.isRequired
};

export default About;
