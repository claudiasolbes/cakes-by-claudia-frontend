import React, {Component} from "react";
import { Grid, Segment, Image } from 'semantic-ui-react';

class AboutContact extends Component{
  render(){
    return (
      <div className="aboutAndContactContainer">
        <img src="./images/backgrounds/pastel-color-watercolor-stain-background_52683-12281.jpg" className="AboutAndContactPage" alt="">
        </img>
        <div className="aboutAndContact">
          <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment>
                  <Image src="https://media.istockphoto.com/photos/female-portrait-icon-as-avatar-or-profile-picture-picture-id477333976?k=6&m=477333976&s=612x612&w=0&h=A5lI_2KJbVjyQpNsaCDWAR3jj-CLV1kqI6ObClYf4e4=" className="aboutMe" alt=""/>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <h1>Claudia Solbes</h1>
                  I'm a 28 (almost 29!) year old web developer, born and raised in Mexico. I have a degree in Culinary Arts and my passion is baking. I also code.
                </Segment>
                <Segment>
                  <h1>Contact Us!</h1>
                  123 A St
                  <br></br>
                  Bake City, CakeWorld, 22000
                  <br></br>
                  <br></br>
                  (123)456 7890
                  <br></br>
                  <br></br>
                  someemail@cakesbyclaudia.com
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default AboutContact;
