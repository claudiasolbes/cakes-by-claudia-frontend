import React, {Component} from "react";
import { Header } from 'semantic-ui-react'

class Footer extends Component {
  render(){
    return (
      <div className="footer">
        <Header as='h3' dividing/>
      <div className="ui grid">
        <div className="left floated five wide column">
          <p>Cakes By Claudia - made with ❤ </p>
        </div>
        <div className="right floated five wide column">
        <p>Website Created By Claudia Solbes</p>
        </div>
      </div>         
      </div>
    );
  }
}

export default Footer;
