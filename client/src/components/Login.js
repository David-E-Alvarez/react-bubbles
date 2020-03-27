import React, {useState} from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
})
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

    const handleChange = e => {
      setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
      })
  }

  
  const submit = e => {
    e.preventDefault();
    console.log("e: ", e)
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        console.log("res.data.token: ", res.data.payload);
        console.log("res: ", res)
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubbles');
      })
      .catch(err => console.log(err.response));  
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submit}>
        <label>Login</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="enter username"
        />
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="enter password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
