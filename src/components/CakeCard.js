import React, {Component} from "react";
import CakeInfo from "./CakeInfo"
import { Card } from 'semantic-ui-react'

class CakeCard extends Component {
  render(){
    return (
      <div className="cakeCard">
        <Card  color="pink">
          <CakeInfo
            cake={this.props.cake}
            findCake={this.props.findCake}
          />
        </Card>
      </div>
    );
  }
}

export default CakeCard;