import React, { Component } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

class LoaderExampleIndeterminate extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Dimmer active>
            <Loader indeterminate>Preparing Files</Loader>
          </Dimmer>
          <Image src="/assets/images/wireframe/short-paragraph.png" />
        </Segment>
      </div>
    );
  }
}

export default LoaderExampleIndeterminate;
