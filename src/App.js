import React, { Component } from "react";
import {
  Header as HeaderData,
  About as AboutData,
  Resume as ResumeData,
  Footer as FooterData,
  Testimonials as TestimonialsData
} from "./services";

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
        <HeaderControl headerData={HeaderData} />
        <AboutControl aboutData={AboutData} />
        <ResumeControl resumeData={ResumeData} />
        <TestimonialsControl testimonialsData={TestimonialsData} />
        <FooterControl footerData={FooterData} />
      </div>
    );
  }
}

export default App;
