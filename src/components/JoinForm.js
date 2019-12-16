import React, {Component} from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import swal from 'sweetalert';

class JoinForm extends Component{

  state = {
    name: "",
    username: "",
    password: "",
    email: "",
    address: "",
    image: ""
  }

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value})
  };

  handleLogInSubmit = () => {
    fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          address: this.state.address,
          image: this.state.image
        })
      }).then(resp => resp.json())
      .then(newUser => {
        (!newUser.error) ? this.props.updateUser(newUser.user) && localStorage.setItem("token", newUser.token) : 
        (swal({
          title: "Oh-oh!",
          text: "It seems like you left an empty field! Please fill out all the fields to continue.",
          icon: "alert",
          button: "Ugh, fine..."
        }))
    })
  }


  render(){
    return (
      <div className= "joinDiv">
        <img src="./images/backgrounds/welcomepage.jpg" className="WelcomePage" alt="">
        </img>
        <div className="joinForm">
          <Segment placeholder>
                <Form
                  onSubmit={this.handleLogInSubmit}
                >
                  <Form.Input
                    label='Name'
                    placeholder='Name'
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                  <Form.Input
                    label='Username'
                    type='username'
                    placeholder='Username'
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                  <Form.Input
                    label='Password'
                    placeholder='Password'
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  <Form.Input
                    label='Email'
                    placeholder='Email'
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                  <Form.Input
                    label='Address'
                    type='address'
                    placeholder='Address'
                    name="address"
                    onChange={this.handleChange}
                    value={this.state.address}
                  />
                  {/* <Form.Input
                    label='Avatar'
                    type='avatar'
                    placeholder='link to the picture'
                    name="image"
                    onChange={this.handleChange}
                    value={this.state.image}
                  /> */}
                  <Button content='Join'/>
                </Form>
          </Segment>
        </div>
      </div>
    );
  }
}

export default JoinForm;
