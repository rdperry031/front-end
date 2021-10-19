import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import axiosWithAuth from '../utilities/axiosWithAuth';


export default function Login(props) {
  const [state, setState] = useState({
      credentials: {
        username: "",
        password: "",
      },
    });

    const { push } = useHistory();

    const handleChange = (e) => {
      setState({
        credentials: { ...state.credentials, [e.target.name]: e.target.value },
      });
    };
  //   console.log(state);
    const login = (e) => {
      e.preventDefault();
      axiosWithAuth()
        .post("auth/login", state.credentials)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          push("/upcomingevents");
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
      <div>
        <h2>Please Sign In</h2>
      <form onSubmit={login}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}
