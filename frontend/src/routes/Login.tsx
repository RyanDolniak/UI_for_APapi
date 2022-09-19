import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import BaseComponent from "$lib/BaseComponent";
import axios from "axios";
import BasicModal from "$lib/PopUp";
import * as yup from "yup";

//npm run dev
//use this commmand to start the react web page
//https://mui.com/material-ui/react-link/



//extends BaseComponent was added to allow login -> student button to function
export default class Login extends BaseComponent {

  Statement = "Incorrect Login Information.";

  state = {
    goto: null,
    pass: "",
    user: "",
    validUser: true,
  };

  //these update state with current text in user and password textboxes
  private updatePass = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      pass: event.currentTarget.value,
    });
  };
  private updateUser = async (event: React.FormEvent<HTMLInputElement>) => {
    const email = event.currentTarget.value;
    this.setState({
      ...this.state,
      user: email,
      validUser: email === "" || (await yup.string().email().isValid(email)),
    });
  };

  //when sign in button is pressed this method puts the user and pass state into a json object matching Student Model in backend and makes a post
  //if it returns 200 the button renders the student page
  createPost = () => {
    axios
      .post("http://localhost:8080/api/login", {
        password: this.state.pass,
        username: this.state.user,
        fullname: "",
        gmail: "",
        DOB: "",
        // token is changed to 1 in backend if pass & user are in DB
        token: 0
      })
      .then((response) => {
        this.goto("/student");
      })
      .catch((response) => {
        console.log(response);
        alert('Failed to Login')
      });

  }



  render(): React.ReactNode {
    //"super.render()??": if BaseComponent parents render== null, render this component (used to render student page with .goto if parent render != null)
    return (
      <Container maxWidth="sm">
        <Box
          component="form"
          sx={{
            mx: "auto",
            py: "50%",
          }}
          autoComplete="off"
        >
          <div>
            <TextField
              error={!this.state.validUser}
              id="outlined-basic"
              label="Username"
              variant="outlined"
              //@ts-ignore
              onChange={this.updateUser}
            />
          </div>
          <div>
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              //@ts-ignore
              onChange={this.updatePass}
            />
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                if (this.state.validUser) {
                  this.createPost();
                }
              }}
            >
              Login
            </Button>
          </div>
        </Box>
      </Container>
    );
  }
}


/*




* /*/