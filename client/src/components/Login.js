import React, {useState} from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "Lambda School",
    password: "i<3Lambd4"
})
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  axiosWithAuth()
    .post("/api/login", credentials)
    .then(res => {
      console.log("res.data.token: ", res.data.payload);
      console.log("res: ", res)
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubbles');
    })
    .catch(err => console.log(err.response));


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
