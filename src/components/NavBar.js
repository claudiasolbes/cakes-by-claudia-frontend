import React, {Component, Fragment} from "react";
import {Menu} from "semantic-ui-react"
import {Link} from "react-router-dom"

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    let logout = () => {
      localStorage.clear()
      this.props.updateUser(null)
    }

    return (
      <div>
        <Menu pointing secondary>
        {this.props.logged_in ? (
          <Fragment>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              as={Link}
              to="/home"
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
                name='profile'
                active={activeItem === 'profile'}
                onClick={this.handleItemClick}
                as={Link}
                to={`/`+`${this.props.user.username}`}
              />
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={logout}
                as={Link}
                to="/"
              />
            </Menu.Menu>
            </Fragment>
          ) : (
            <Fragment>
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
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
              as={Link}
              to="/login"
            />
            </Menu.Menu>
          </Fragment>
        )}
        </Menu>
      </div>
    )
  }
}
