import React, {Component} from "react";
// import { Grid } from 'semantic-ui-react';
// import CakeList from "./CakeList"

class Order extends Component {
  render(){
    return (
      <>
        <img src="./images/backgrounds/stripes.jpg" className="OrderPage" alt="">
        </img>
        <div className="orderShow">
          <h1 className="orderFont">Your Cart</h1>
        <div className="ui internally celled grid">
          <div className="row">
            <div className="three wide column orderFont">
              <p> Qt </p>
            </div>
            <div className="ten wide column orderFont">
              <p>Product</p>
            </div>
            <div className="three wide column orderFont">
            <p> Price </p>
            </div>
          </div>
          <div className="row">
            <div className="three wide column"></div>
            <div className="ten wide column">
              <p></p>
            </div>
            <div className="three wide column"></div>
          </div>
          <div className="row">
            <div className="three wide column"></div>
            <div className="ten wide column">
              <p></p>
            </div>
            <div className="three wide column"></div>
          </div>
          <div className="row">
            <div className="three wide column"></div>
            <div className="ten wide column">
              <p></p>
            </div>
            <div className="three wide column"></div>
          </div>
        </div>
        </div>
      </>
    )
  }
}
          

export default Order;
