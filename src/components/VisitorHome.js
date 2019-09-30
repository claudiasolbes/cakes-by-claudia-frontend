import React, {Component} from "react";
import CakeList from "./CakeList";
import VisitorHomeGreeting from "./VisitorHomeGreeting";

class VisitorHome extends Component{
  render(){
    return (
      <div>
        <br></br>
        <br></br>
        <VisitorHomeGreeting />
        <br></br>
        <br></br>
        <CakeList
          cakes={this.props.cakes}
          findCake={this.props.findCake}
        />
        <br></br>
      </div>
    );
  }
}

export default VisitorHome;