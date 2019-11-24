import React, {Component} from "react";
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

class WelcomePage extends Component{
  render(){
    return (
      <div className="welcomePageContainer">
        <img src="./images/backgrounds/welcomepage.jpg" className="WelcomePage" alt="">
        </img>
        <>
        <h1 className="welcomeTitle1">Welcome to Cakes By Claudia,</h1>
        <br></br>
        <h1 className="welcomeTitle2">where we make your dreams become cakes!</h1>
        </>
          <Button
            className="logInButton"
            onClick={this.props.userLogIn}
            as={Link}
            to="/login"
            >Log In</Button>
          <Button
            className="visitorButton"
            onClick={this.props.visitorLogIn}
            as={Link}
            to="/visitorhome"
          >Thanks, I'm just browsing!</Button>
      </div>
    );
  }
}

export default WelcomePage;
