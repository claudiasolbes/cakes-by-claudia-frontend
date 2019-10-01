import React, {Component} from "react";
import CakeList from "./CakeList";
import HomeGreeting from "./HomeGreeting";

class Home extends Component {
  render(){
    return (
      <div>
        <img src="./images/backgrounds/unicorn.png" className="Home" alt="">
        </img>
        <HomeGreeting 
          user={this.props.user}
        />
        <br></br>
        <br></br>
        <CakeList
          cakes={this.props.cakes}
          showCake={this.props.showCake}
        />
        <br></br>
      </div>
    );
  }
}

export default Home;