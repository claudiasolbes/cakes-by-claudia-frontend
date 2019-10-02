import React, {Component} from "react";
import { Grid } from 'semantic-ui-react';
import CakeList from "./CakeList"

class Order extends Component {
  render(){
    return (
        <div>
          <img src="./images/backgrounds/stripes.jpg" className="OrderPage" alt="">
          </img>
          <div className="orderShow">
          <Grid container columns={3} divided relaxed stackable>
            <Grid.Column>
              <h1 className="orderFont">Your Cart</h1>
            </Grid.Column>
            <Grid.Column>
              <h2 className="orderFont">Cakes</h2>
              <div className="orderCakeShow">
                <CakeList
                  cakes={this.props.cakes}
                  findCake={this.props.findCake}
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <h2 className="orderFont">Order Details</h2>
            </Grid.Column>
          </Grid>






            {/* <Menu attached compact widths={3}>
              <Menu.Item as='a'>
                <img src={this.props.user.image}></img>
                <h1>{this.props.user.name}</h1>
              </Menu.Item>
              <Menu.Item as='a'>Item</Menu.Item>
              <Menu.Item as='a'>Item</Menu.Item>
            </Menu> */}
          </div>
        </div>
    );
  }
}

export default Order;
