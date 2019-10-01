import React, {Component} from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";

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
       alert("Incorrect username or password")
     }
    })
  }

  render(){
    return (
      <div>
        <h1>Coming Soon...</h1>
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
                <Button content='Sign up' icon='signup' size='big' />
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
