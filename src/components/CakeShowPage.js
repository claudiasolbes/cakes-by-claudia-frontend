import React from 'react'
import { Segment, Image, Button, Grid, Divider } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const CakeShowPage = (props) => {
  console.log(props)
  return(
    <Segment>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <h1 className="cakeTitle">{props.selectedCake.name}</h1>
          <Image src={props.selectedCake.image} className="cakePicture"/>
        </Grid.Column>
        <Grid.Column>
          <div className="cakeInfo">
          <h2 className="cakeDescription">{props.selectedCake.description}</h2>
          <h3 className="cakePrice">${props.selectedCake.price}</h3>
          <Button onClick={props.addToCart}> Yum! Add to Cart! </Button>
          <Button
            as={Link}
            to="/home"
          >
            Hmmm... I'll keep browsing!
          </Button>
          </div>
        </Grid.Column>
      </Grid>
      <Divider vertical></Divider>
    </Segment>
  )
}


export default CakeShowPage