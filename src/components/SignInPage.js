import React, {Component} from "react";
import {Button} from "semantic-ui-react"

class WelcomePage extends Component{
  render(){
    return (
      <div>
        <h1>Coming Soon...</h1>
        <img src="./images/backgrounds/welcomepage.jpg" className="WelcomePage" alt="">
        </img>
          {/* <Button
            className="logInButton"
            onClick={this.props.userLogIn}
            >Log In</Button>
          <Button
            className="createAccountButton"
            onClick={this.props.visitorLogIn}
          >Create Account</Button> */}
      </div>
    );
  }
}

export default WelcomePage;
