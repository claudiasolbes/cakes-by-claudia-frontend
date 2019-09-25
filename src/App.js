import React, {Component} from 'react';
import './App.css';
import WelcomePage from "./components/WelcomePage"
import VisitorHome from "./components/VisitorHome"
import SignInPage from "./components/SignInPage"

class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn: null,
      cakes: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/cakes")
    .then(resp => resp.json())
    .then(cakes =>
      this.setState({
        cakes: cakes
      }))
  }

  visitorLogIn = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  userLogIn = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  cakeCardButton = () => {
    console.log("clicked")
  }

  render(){
    if(this.state.isLoggedIn === null){
    return (
        <WelcomePage
          visitorLogIn={this.visitorLogIn}
          userLogIn={this.userLogIn}
          isLoggedIn={this.state.isLoggedIn}
        />
    )}
    else if(this.state.isLoggedIn === true){
      return (
          <SignInPage />
      )}
      else {
        return (
          <VisitorHome
            cakes={this.state.cakes}
            cakeCardButton={this.cakeCardButton}
          />
        )
      }
  }
}

export default App;
