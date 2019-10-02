import React, {Component} from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import swal from 'sweetalert';
import {Link} from "react-router-dom"

class SignInPage extends Component{

  state = {
    username: "",
    password: ""
  };

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value})
  };


  handleLogInSubmit = () => {
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(resp => resp.json())
    .then(data => {
     if(data.authenticated){
       console.log(data.token)
       localStorage.setItem("token", data.token)
       this.props.updateUser(data.user)
     }else{
       swal({
         title: "Oh-oh!",
         text: "it seems like you have an incorrect username or password",
         icon: "error",
         button: "Cool, I'll try again!"
        })
     }
    })
  }

  render(){
    return (
      <div>
        <img src="./images/backgrounds/welcomepage.jpg" className="WelcomePage" alt="">
        </img>
        <div className="signInForm">
          <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                <Form
                  onSubmit={this.handleLogInSubmit}
                >
                  <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    placeholder='Username'
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                  <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    type='password'
                    placeholder='Password'
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />

                  <Button content='Login' primary/>
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign='middle'>
                <Button content='Join' icon='signup' size='big' as={Link} to="/join"/>
              </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
          </Segment>
        </div>
      </div>
    );
  }
}

export default SignInPage;
