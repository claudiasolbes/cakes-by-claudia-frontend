import React, {Component} from "react"
import { Image } from 'semantic-ui-react'
import {Link} from "react-router-dom"

class CakeInfo extends Component {
  render(){
    return (
      <div className="cakeCard">
        <Image
          src={this.props.cake.image}
          onClick={this.props.findCake}
          as={Link}
          to={`/cakes/${this.props.cake.id}`}
        />
      </div>
    );
  }
}

export default CakeInfo;
