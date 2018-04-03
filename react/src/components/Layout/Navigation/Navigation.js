import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    name: 'about'
  },
  {
    name: 'experience'
  },
  {
    name: 'education'
  },
  {
    name: 'Contact'
  }
];

class Navigation extends Component {
  renderMenuItems = item => {
    return (
      <Menu.Item
        position={item.position}
        key={item.name}
        name={item.name}
        as={NavLink}
        to={`/${item.name}`}
      />
    );
  };

  render() {
    return (
      <Menu vertical fluid borderless inverted color="blue">
        {Object.keys(menuItems).map(item => {
          return this.renderMenuItems(menuItems[item]);
        })}
      </Menu>
    );
  }
}

export default Navigation;
