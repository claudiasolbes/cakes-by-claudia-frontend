import React, {Component} from "react";
import { Card } from 'semantic-ui-react';
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Order extends Component {
  render(){
    return (
      <>
        <img src="./images/backgrounds/fork.jpg" className="UserOrders" alt="">
        </img>
        <div className="orderShow">
          <h1 className="orderFont">Your Orders</h1>
          <h1 className="comingSoon"> Coming Soon...</h1>
        </div>
        <div className="orderCard">
        <Card  color="pink">
          Hi
        </Card>
      </div>
      <div>
      <Button
        className="backToHomeButton"
        as={Link}
        to={`/home`}
      > Back to Home
      </Button>
      </div>
      </>
    );
  }
}

export default Order;
