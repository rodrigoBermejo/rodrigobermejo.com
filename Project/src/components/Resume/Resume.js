import React, { Component } from "react";
import PropTypes from "prop-types";

class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.education.map((item, i) => {
              return (
                <div key={i} className="row item">
                  <div className="twelve columns">
                    <h3>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-book" />
                        <span> {item.institute}</span>
                      </a>
                    </h3>

                    <p className="info">
                      {item.title}
                      <span>•</span>
                      <em className="date">{item.class}</em>
                    </p>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.work.map((item, i) => {
              return (
                <div key={i} className="row item">
                  <div className="twelve columns">
                    <h3>{item.jobTitle}</h3>
                    <p className="info">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-briefcase" />
                        <span> {item.company}</span>
                      </a>
                      <span>•</span>
                      <em className="date">{item.dates}</em>
                    </p>
                    <p>{item.location}</p>
                    <p>{item.functions}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row certifications">
          <div className="three columns header-col">
            <h1>
              <span>Certifications</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.certifications.map((item, i) => {
              return (
                <div key={i} className="row item">
                  <div className="twelve columns">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

Resume.propTypes = {
  resumeData: PropTypes.object.isRequired
};

export default Resume;
