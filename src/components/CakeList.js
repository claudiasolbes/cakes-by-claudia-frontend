import React, {Component} from "react";
import CakeCard from "./CakeCard"
import { Card } from 'semantic-ui-react'

class CakeList extends Component {
  render(){
    return (
      <Card.Group centered itemsPerRow={6}>
        {this.props.cakes.map(cake => {
          return (
            <div className="cakeList" key={cake.id}>
            <CakeCard
              cake={cake}
              selectedCake={this.props.selectedCake}
              findCake={this.props.findCake}
            />
            </div>
        )})
        }
      </Card.Group>
    );
  }
}

export default CakeList;