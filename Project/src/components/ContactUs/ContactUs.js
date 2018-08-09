import React, { Component } from "react";

export default class ContactUs extends Component {
  twitEventClick = () => {
    window.open(
      "https://twitter.com/intent/tweet?screen_name=rodrigoBermejo",
      "_blank"
    );
  };

  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className="ten columns">
            <p className="lead">Let's get in touch.</p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name:
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    size={35}
                    id="contactName"
                    name="contactName"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail">
                    Email:
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    size={35}
                    id="contactEmail"
                    name="contactEmail"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject:</label>
                  <input
                    type="text"
                    size={35}
                    id="contactSubject"
                    name="contactSubject"
                    autoComplete="organization-title"
                  />
                </div>
                <div>
                  <label htmlFor="contactMessage">
                    Message:
                    <span className="required">*</span>
                  </label>
                  <textarea
                    cols={50}
                    rows={4}
                    id="contactMessage"
                    name="contactMessage"
                  />
                </div>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img src="images/loaderBlue.gif" alt="Sending..." />
                  </span>
                </div>
              </fieldset>
            </form>
            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!
              <br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_tweets">
              <button onClick={this.twitEventClick} className="send-me-a-tweet">
                Send me a tweet
              </button>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
