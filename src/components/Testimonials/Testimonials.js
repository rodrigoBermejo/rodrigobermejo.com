import React, { Component } from 'react';

export default class Testimonials extends Component {
  render() {
    let testimonials = this.props.testimonialsData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Co-Workers Testimonials</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {testimonials.coWorkers.map(item => {
                    return (
                      <li>
                        <blockquote>
                          <p>{item.testimonial}
                          </p>
                          <cite><a href={item.link}>{item.name}</a></cite>
                        </blockquote>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}