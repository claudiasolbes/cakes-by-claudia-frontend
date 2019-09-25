import React, {Component} from "react";
import CakeCard from "./CakeCard"
import { Card } from 'semantic-ui-react'

class CakeList extends Component {
  render(){
    return (
      <Card.Group centered itemsPerRow={6}>
        {this.props.cakes.map(cake => {
          return (
            <div className="cakeList" key={cake.id} onClick={this.props.cakeCardButton}>
            <CakeCard
              cake={cake}
            />
            </div>
        )})
        }
      </Card.Group>
    );
  }
}

export default CakeList;
