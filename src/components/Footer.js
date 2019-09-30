import React, {Component} from "react";
import { Header } from 'semantic-ui-react'

class Footer extends Component {
  render(){
    return (
      <div className="footer">
        <Header as='h3' dividing/>
        <p>Cakes By Claudia - with ❤ __________________________________________________________________________________________________________________________________________________________________ Website Created By: Claudia Solbes</p>
      </div>
    );
  }
}

export default Footer;
