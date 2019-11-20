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
import Settings from "./components/Settings"
// import Admin from "./components/Admin"
// import AdminOrders from "./components/AdminOrders"
import {Route, Switch, Redirect} from "react-router-dom"

class App extends Component {
  constructor(){
    super()
    this.state = {
      cakes: [],
      selectedCake: {},
      user: null,
      loading: true,
      orders: [],
      cakesAddedToOrder: []
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
      fetch("http://localhost:3000/users", {
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
      fetch("http://localhost:3000/orders")
    .then(resp => resp.json())
    .then(orders =>
      this.setState({
        orders: orders
      }))
  }

  findCake = (event) => {
    const selectedCake = this.state.cakes.find(function(cake) {
      return cake.image === event.target.src
    })
    this.setState({
      selectedCake: selectedCake
    })
    // this.selectCake(selectedCake)
  }

    // selectCake = (selectedCake) => {
    //   this.setState({
    //     selectedCake: selectedCake
    //   })
    // }

    addToCart = () => {
      debugger
    }

  render(){
    return(
      <>
        <NavBar logged_in={!!this.state.user} updateUser={this.updateUser} user={this.state.user}/>
        {!this.state.loading ? <Switch>
          <Route exact path = "/" component={WelcomePage}/>
          <Route exact path = "/login" render={() => this.state.user && localStorage.length === 1? 
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
              findCake={this.findCake}
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
            orders={this.state.orders}
          />}/>
          <Route exact path = "/footer" component={Footer}/>
          {/* <Route exact path = "/admin" component={Admin}/> */}
          <Route exact path = "/cakes/:id" render={() => <CakeShowPage
            selectedCake={this.state.selectedCake}
            addToCart={this.addToCart}
            />}/>
          {/* <Route exact path = "/admin/:id" component={AdminOrders}/> */}
          <Route exact path = "/profile/:username" render={() => <UserProfile
            user={this.state.user}
            orders={this.state.orders}
          />}/>
          <Route exact path = "/:username/orders" render={() => <UserOrders 
            orders={this.state.orders}
            />}/>
          <Route exact path = "/:username/settings" render={() => <Settings
            user={this.state.user}
            updateUser={this.updateUser}
            />}/>
          <Route component={PageNotFound}/>
        </Switch> : null}
        <Footer />
      </>
    )
  }
}

export default App;
