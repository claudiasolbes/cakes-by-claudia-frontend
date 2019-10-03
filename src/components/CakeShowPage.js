import React from 'react'
import { Segment, Image, Button, Grid, Divider } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const CakeShowPage = (props) => {
  console.log(props)
  return(
    <Segment>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <p className="cakeTitle">{props.selectedCake.name}</p>
          <Image src={props.selectedCake.image} />
        </Grid.Column>
        <Grid.Column>
          <div className="cakeInfo">
          <p className="cakeDescription">{props.selectedCake.description}</p>
          <p className="cakePrice">${props.selectedCake.price}</p>
          <Button> Yum! Add to Cart! </Button>
          <Button
            as={Link}
            to="/visitorhome"
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