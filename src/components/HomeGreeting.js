import React, {Component} from "react";
import {Button} from "semantic-ui-react";

class HomeGreeting extends Component {
  render(){
    console.log(this.props.user.name)
    return (
      <div>
        <div className="greeting">
          <h1>Hi, {this.props.user.name}!</h1>
        </div>
        <div className="scrollDownButton">
          <Button
            className="cakesButton"
            href="#cakes"
          > Cakes
          </Button>
        </div>
      </div>
    );
  }
}

export default HomeGreeting;
