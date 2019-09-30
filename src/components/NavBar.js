import React, {Component} from "react";
import {Menu} from "semantic-ui-react"
import {Link} from "react-router-dom"

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link}
            to="/visitorhome"
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            as={Link}
            to="/about"
          />
          <Menu.Item
            name='order'
            active={activeItem === 'order'}
            onClick={this.handleItemClick}
            as={Link}
            to="/order"
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
              as={Link}
              to="/contact"
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
