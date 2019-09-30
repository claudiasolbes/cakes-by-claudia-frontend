import React, {Component} from 'react';
import './App.css';
import WelcomePage from "./components/WelcomePage"
import VisitorHome from "./components/VisitorHome"
import SignInPage from "./components/SignInPage"
import AboutContact from "./components/AboutContact"
import Home from "./components/Home"
import Order from "./components/Order"
import PageNotFound from "./components/PageNotFound"
import CakeShowPage from "./components/CakeShowPage"
import UserProfile from "./components/UserProfile"
import UserOrders from "./components/UserOrders"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import {Route, Switch} from "react-router-dom"

class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn: null,
      cakes: [],
      selectedCake: {}
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

  findCake = (event) => {
    const selectedCake = this.state.cakes.find(function(cake) {
      return cake.image === event.target.src
    })
    this.selectCake(selectedCake)
  }

    selectCake = (selectedCake) => {
      this.setState({
        selectedCake: selectedCake
      })
    }

  render(){
    console.log(this.state.selectedCake)
    return(
      <>
        <Switch>
          <Route exact path = "/" component={WelcomePage}/>
          <Route exact path = "/login" component={SignInPage}/>
        </Switch>
        <NavBar />
        <Switch>
          <Route exact path = "/visitorhome" render={() => <VisitorHome
            cakes={this.state.cakes}
            findCake={this.findCake}
          />}/>
          <Route exact path = "/about" component={AboutContact}/>
          <Route exact path = "/contact" component={AboutContact}/>
          <Route exact path = "/home" render={() => <Home
            cakes={this.state.cakes}
          />}/>
          <Route exact path = "/order" component={Order}/>
          <Route exact path = "/user" component={UserProfile}/>
          <Route exact path = "/footer" component={Footer}/>
          <Route exact path = "/cake" component={CakeShowPage}/>
          <Route exact path = "/user/orders" component={UserOrders}/>
          <Route exact path = "/cakes/:id" render={() => <CakeShowPage
            selectedCake={this.state.selectedCake}
          />}/>
          <Route component={PageNotFound}/>
        </Switch>
        <Footer />
      </>
    )
  }
}

export default App;
