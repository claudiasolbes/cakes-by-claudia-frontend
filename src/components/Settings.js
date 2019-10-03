import React, {Component} from "react";
import { Button } from 'semantic-ui-react';
import {Link} from "react-router-dom"
// import swal from 'sweetalert';

class Settings extends Component {

  deleteUser = () => {
    const body = {
      name: this.props.user.name,
          username: this.props.user.username,
          password: this.props.user.password,
          email: this.props.user.email,
          address: this.props.user.address,
          image: this.props.user.image
    }
    fetch(`http://localhost:3000/users/${this.props.user.username}`,{
      method: "DELETE",
      headers: {'Content-Type':'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    this.setState({
      user: null,
    })
    localStorage.clear()
    this.props.updateUser(null)
  }

  render(){
    return (
      <div>
        <img src="./images/backgrounds/rainbow.jpg" className="UserProfile" alt=""/>
        <div className="profileInfo">
          <img src={this.props.user.image} alt=""/>
          <h1>Name: {this.props.user.name}</h1>
          <h1>Username: {this.props.user.username}</h1>
          <h1>Password{this.props.user.password}</h1>
          <h1>Email: {this.props.user.email}</h1>
          <h1>Address: {this.props.user.address}</h1>
        </div>
        <Button
          className="editButton"
          as={Link}
          to={`/${this.props.user.username}/settings/edit`}
        > Edit
        </Button>
        <Button
          className="deleteButton"
          onClick={this.deleteUser}
          as={Link}
          to={"/"}
        > Delete
        </Button>
        </div>
    )
  }
}

export default Settings;