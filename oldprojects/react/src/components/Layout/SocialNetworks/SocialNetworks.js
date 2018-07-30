import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

class SocialNetworks extends React.Component {
  redirectToSocialNetworks(e, object) {
    switch (object.name) {
      case 'linkedin':
        window.location = 'https://www.linkedin.com/in/rodrigolbermejo/';
        break;
      case 'github':
        window.location = 'https://github.com/rodrigoBermejo';
        break;
      case 'mail':
        window.location = 'mailto:rodrigo.bermejo@outlook.com';
        break;
      default:
        window.location = 'https://www.linkedin.com/in/rodrigolbermejo/';
        break;
    }
  }

  render() {
    return (
      <Segment basic inverted fluid color="blue" textAlign="center">
        <Button
          circular
          basic
          inverted
          name="linkedin"
          icon="linkedin"
          size="big"
          onClick={this.redirectToSocialNetworks}
          color="grey"
        />
        <Button
          circular
          basic
          inverted
          name="github"
          icon="github"
          size="big"
          onClick={this.redirectToSocialNetworks}
          color="grey"
        />
        <Button
          circular
          basic
          inverted
          name="mail"
          icon="mail outline"
          size="big"
          onClick={this.redirectToSocialNetworks}
          color="grey"
        />
      </Segment>
    );
  }
}

export default SocialNetworks;
