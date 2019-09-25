import React, {Component} from "react";
import {Button} from "semantic-ui-react"

class WelcomePage extends Component{
  render(){
    return (
      <div>
        <img src="./images/backgrounds/welcomepage.jpg" className="WelcomePage" alt="">
        </img>
          <Button
            className="logInButton"
            onClick={this.props.userLogIn}
            >Log In</Button>
          <Button
            className="visitorButton"
            onClick={this.props.visitorLogIn}
          >Thanks, I'm just browsing!</Button>
      </div>
    );
  }
}

export default WelcomePage;
