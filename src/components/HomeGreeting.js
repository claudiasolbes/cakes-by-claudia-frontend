import React, {Component} from "react";
import { Button } from 'semantic-ui-react'

class HomeGreeting extends Component {
  render(){
    return (
      <div>
        <div className="greeting">
          <h1>Hi, User!</h1>
        </div>
        <div className="scrollDownButton">
          <Button>
            Show me the cakes!
          </Button>
        </div>
      </div>
    );
  }
}

export default HomeGreeting;
