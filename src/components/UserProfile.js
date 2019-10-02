import React, {Component} from "react";
import { Button } from 'semantic-ui-react';
import {Link} from "react-router-dom"

class UserProfile extends Component {
  render(){
    return (
      <div>
        <img src="./images/backgrounds/rainbow.jpg" className="UserProfile" alt=""/>
        <img className="avatar" src={this.props.user.image} alt=""/>
        <div className="profileInfo">
          <h1>{this.props.user.name}</h1>
        </div>
          <Button
              className="ordersButton"
              as={Link}
              to={`/${this.props.user.username}/orders`}
            > Orders
          </Button>
          <Button
              className="settingsButton"
              as={Link}
              to={`/${this.props.user.username}/settings`}
            > Settings
          </Button>
        </div>
    )
  }
}

export default UserProfile;