import React, {Component} from "react";
import NavBar from "./NavBar";
import CakeList from "./CakeList";
import VisitorHomeGreeting from "./VisitorHomeGreeting";

class VisitorHome extends Component{
  render(){
    return (
      <div>
        <NavBar
          isLoggedIn={this.props.isLoggedIn}
          home={this.props.home}
          about={this.props.about}
          order={this.props.order}
          contact={this.props.contact}
        />
        <br></br>
        <br></br>
        <VisitorHomeGreeting />
        <br></br>
        <br></br>
        <CakeList
          cakes={this.props.cakes}
          cakeCardButton={this.props.cakeCardButton}
        />
      </div>
    );
  }
}

export default VisitorHome;