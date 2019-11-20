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
          <h1 className="comingSoon"> Coming Soon...</h1>
        </div>
      </>
    )
  }
}
          

export default Order;
