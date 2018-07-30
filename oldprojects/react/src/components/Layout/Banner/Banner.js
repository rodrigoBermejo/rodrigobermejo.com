import React, { Component } from 'react';
import BannerImg from '../../assets/banner.jpg';
import { Image } from 'semantic-ui-react';

class Banner extends Component {
  render() {
    return <Image src={BannerImg} alt="Aguascalientes" />;
  }
}

export default Banner;
