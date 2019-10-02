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
import JoinForm from "./components/JoinForm"
import {Route, Switch, Redirect} from "react-router-dom"

class App extends Component {
  constructor(){
    super()
    this.state = {
      cakes: [],
      selectedCake: {},
      user: null,
      loading: true,
      orders: []
    }
  }

  updateUser = (user) => {
    this.setState({
      user: user,
      loading: false
    })
  }

  componentDidMount(){
    if(localStorage.getItem("token")){
      fetch("http://localhost:3000/home", {
        headers: {
          "Authentication" : `Bearer ${localStorage.getItem("token")}`
        }
      }).then(resp => resp.json())
      .then(user => {
        this.updateUser(user)
      })
    }else{
      this.setState({loading: false})
    }
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
    return(
      <>
        <NavBar logged_in={!!this.state.user} updateUser={this.updateUser} user={this.state.user}/>
        {!this.state.loading ? <Switch>
          <Route exact path = "/" component={WelcomePage}/>
          <Route exact path = "/login" render={() => this.state.user ? 
          <Redirect to="/home" /> :
            <SignInPage 
              updateUser={this.updateUser}
            />
          }/>
          <Route exact path = "/join" render={() => this.state.user ? 
          <Redirect to="/home" /> :
            <JoinForm  
              updateUser={this.updateUser}
            />
          }/>
          <Route exact path = "/join" render={() => <JoinForm 
            user={this.state.user}
          />}/>
          <Route exact path = "/home" render={() => this.state.user ?
            <Home
              {...this.state.user}
              user={this.state.user}
              cakes={this.state.cakes}
            /> :
            <Redirect to= "/visitorhome" />
          }/>
          <Route exact path = "/visitorhome" render={() => <VisitorHome
            cakes={this.state.cakes}
            findCake={this.findCake}
          />}/>
          <Route exact path = "/about" component={AboutContact}/>
          <Route exact path = "/contact" component={AboutContact}/>
          <Route exact path = "/order" render={() => <Order 
            user={this.state.user}
            cakes={this.state.cakes}
          />}/>
          <Route exact path = "/footer" component={Footer}/>
          <Route exact path = "/admin" component={Footer}/>
          <Route exact path = "/cakes/:id" render={() => <CakeShowPage
            selectedCake={this.state.selectedCake}
            />}/>
          <Route exact path = "/admin/:id" component={Footer}/>
          <Route exact path = "/:username/orders" render={() => <UserOrders 
            orders={this.state.orders}
          />}/>
          <Route exact path = "/profile/:username" render={() => <UserProfile
            user={this.state.user}
            orders={this.state.orders}
            />}/>
            <Route component={PageNotFound}/>
        </Switch> : null}
        <Footer />
      </>
    )
  }
}

export default App;
