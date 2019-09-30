import React, {Component} from "react";
import { Grid, Image, Segment, Button } from 'semantic-ui-react';
import {Link} from "react-router-dom";

class VisitorHomeGreeting extends Component {
  render(){
    return (
      <Grid columns='equal' className="">
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DMuChOgh1xVyLIlVv_SBPq5NrM_lU57arcqYOfV3SzrgjxxCeg" className="homeCake" alt=""/>
        </Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>
          <br></br>
          <br></br>
          <h1 className="vh-middle-column">Designer Cakes for any ocasion!</h1>
          <div className="orderButton">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <Button
              className="orderButton"
              as={Link}
              to="/order"
            >
              Order Here
            </Button>
            <br></br>
            <br></br>
            <Button
              // className="orderButton"
              // as={Link}
              // to="/order"
            >
              Show me the cakes!
            </Button>
          </div>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment>
          <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsHEZ75T2toi4e0Ywv6yitbRFLlSvnZYrUHd4r4jpdixMsu_b' className="homeCake" alt=""/>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    );
  }
}

export default VisitorHomeGreeting;
