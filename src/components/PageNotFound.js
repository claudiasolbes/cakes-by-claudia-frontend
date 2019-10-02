import React, {Component} from "react";

class PageNotFound extends Component{
  render(){
    return (
      <>
        <img src="./images/backgrounds/broken.png" className="PageNotFound" alt="">
        </img>
        <h1 className="notFound">Oops! Looks like <br></br> something's broken...</h1>
      </>
    );
  }
}

export default PageNotFound;
