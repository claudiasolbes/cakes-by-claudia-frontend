import React, {Component} from "react";
import { Button, Image } from 'semantic-ui-react';
import {Link} from "react-router-dom"

class UserProfile extends Component {
  render(){
    return (
      <div>
        <img src="./images/backgrounds/teal_cake.jpg" className="UserProfile" alt="">
        </img>
        <div className="avatar">
        <Image src='data:image/png;base64,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' size='small' circular />
        </div>
        <div className="profileInfo">
          <h1>{this.props.user.name}</h1>
        </div>
          <Button
              className="ordersButton"
              as={Link}
              to="/orders"
            > Orders
          </Button>
          <Button
              className="settingsButton"
              // as={Link}
              // to="/settings"
            > Settings
          </Button>
        </div>
    )
  }
}

export default UserProfile;