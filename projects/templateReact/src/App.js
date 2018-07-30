import React, { Component } from "react";
import {
  Header as HeaderModel,
  About as AboutModel,
  Resume as ResumeModel,
  Footer as FooterModel,
  Testimonials as TestimonialsModel
} from "./model";

import {
  Header as HeaderControl,
  About as AboutControl,
  Resume as ResumeControl,
  Footer as FooterControl,
  Testimonials as TestimonialsControl
} from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderControl headerData={HeaderModel} />
        <AboutControl aboutData={AboutModel} />
        <ResumeControl resumeData={ResumeModel} />
        <TestimonialsControl testimonialsData={TestimonialsModel} />
        <FooterControl footerData={FooterModel} />
      </div>
    );
  }
}

export default App;
