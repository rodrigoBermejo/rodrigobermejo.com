import React, { Component } from 'react';
import { Segment, Form } from 'semantic-ui-react';
import Layout from '../Layout';
import ReCAPTCHA from 'react-google-recaptcha';

//const getCaptchaResponse = async req => {
//const recaptchaResponse = await verifyHumanity(req);
//return { recaptchaResponse };
//};

class Contact extends Component {
  state = {
    name: '',
    email: '',
    submittedName: '',
    submittedEmail: '',
    'g-recaptcha-response': []
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log(this.state['g-recaptcha-response']);
    const { name, email } = this.state;
    this.setState({ submittedName: name, submittedEmail: email });
    //clear
    this.setState({ email: '', name: '' });
  };

  getCaptchaResponse(response) {
    console.log(response.connection.remoteAddress);
    this.setState({
      'g-recaptcha-response': response
    });
  }

  render() {
    return (
      <Segment textAlign="left">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              required
              name="firstName"
              label="First name"
              placeholder="First name"
            />
            <Form.Input
              required
              name="lastName"
              label="Last name"
              placeholder="Last name"
            />
          </Form.Group>
          <Form.Input required name="email" label="Email" placeholder="Email" />
          <Form.TextArea
            required
            name="message"
            label="Message"
            placeholder="Message"
          />
          <ReCAPTCHA
            ref="recaptcha"
            sitekey="6LdB-0cUAAAAAJ_jfRamCe92qBbUdMTanbE4ZAUd"
            onChange={this.getCaptchaResponse.bind(this)}
          />
          <Form.Button positive content="Submit" />
        </Form>
      </Segment>
    );
  }
}

export default Layout(Contact);
