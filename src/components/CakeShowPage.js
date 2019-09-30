import React from 'react'
import { Segment, Image, Button } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const CakeShowPage = (props) => {
  console.log(props)
  return(
    <Segment>
      <p className="cakeTitle">{props.selectedCake.name}</p>
      <Image src={props.selectedCake.image} />
      <p>{props.selectedCake.description}</p>
      <p>${props.selectedCake.price}</p>
      <Button> Yum! Add to Cart! </Button>
      <Button
        as={Link}
        to="/visitorhome"
      >
        Take me back home, please!
      </Button>
    </Segment>
  )
}


export default CakeShowPage