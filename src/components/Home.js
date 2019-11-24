import React, {Component} from "react";
import CakeList from "./CakeList";
import HomeGreeting from "./HomeGreeting";
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Home extends Component {
  render(){
    return (
      <div>
        <div>
          <img src="./images/backgrounds/unicorn.png" className="Home" alt="">
          </img>
          <HomeGreeting 
            user={this.props.user}
          />
          <br></br>
          <Button
            className="ordersButton"
            as={Link}
            to={`/${this.props.user.username}/orders`}
          > Orders
          </Button>
          <br></br>
          <br></br>
          <Button
            className="settingsButton"
            as={Link}
            to={`/${this.props.user.username}/settings`}
          > Settings
          </Button>
          <br></br>
          <br></br>
          {/* <Button
            className="cakesButton"
            href="#cakes"
          > Cakes
          </Button> */}
          </div>
        <div id="cakes">
          <CakeList
            cakes={this.props.cakes}
            showCake={this.props.showCake}
            findCake={this.props.findCake}
          />
          <br></br>
        </div>
      </div>
    );
  }
}

export default Home;