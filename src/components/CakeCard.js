import React, {Component} from "react";
import CakeInfo from "./CakeInfo"

class CakeCard extends Component {
  render(){
    return (
      <div>
        <CakeInfo
          cake={this.props.cake}
        />
      </div>
    );
  }
}

export default CakeCard;
