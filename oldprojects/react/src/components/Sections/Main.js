import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Message } from 'semantic-ui-react';
import { About, Contact, Education, Experience } from './index';

class Main extends Component {
  render() {
    const about = () => <About />;
    const contact = () => <Contact />;
    const education = () => <Education />;
    const experience = () => <Experience />;
    const error = () => (
      <Message
        icon="warning circle"
        header="Ups... Error!"
        content="Please go back and try again."
      />
    );

    return (
      <Switch>
        <Route exact path="/" component={about} />
        <Route path="/about" render={about} />
        <Route path="/contact" render={contact} />
        <Route path="/education" render={education} />
        <Route path="/experience" render={experience} />
        <Route render={error} />
      </Switch>
    );
  }
}

export default Main;
