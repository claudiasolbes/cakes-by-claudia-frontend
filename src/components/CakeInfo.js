import React, {Component} from "react"
import { Card } from 'semantic-ui-react'

class CakeInfo extends Component {
  render(){
    return (
      <div className="card">
        <Card color='pink' image={this.props.cake.image}/>
      </div>
    );
  }
}

export default CakeInfo;
