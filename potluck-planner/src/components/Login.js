import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import axiosWithAuth from '../utilities/axiosWithAuth';
import * as yup from 'yup';

// FormSchema for Validation
import formSchema from "../Validation/SignUp&Login/signup&login";


// Styling
import "bootstrap/dist/css/bootstrap.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";
import styled from "styled-components";


const StyledLogin = styled.div`

  margin: 5% auto 5% auto;
  padding: 4% 3%;
  width: 45%;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  input{
    margin-bottom: 1rem;
  }

  h2{
    text-align: center;
    font-weight: 500;
  }

  button{
    background-color: var(--accent-color);
    border: none;

    &:hover{
      // background-color: var(--accent-color-dark)
      background-color: #58602E;
    }
  }


  @media (max-width: 1000px){
    width: 70%;
  }

  @media (max-width: 768px){
    width: 85%;
    margin-top: 3rem;
  }


`

const initialFormErrors = {
  username: '',
  password: ''
}


export default function Login(props) {
  const [state, setState] = useState({
      credentials: {
        username: "",
        password: "",
      },
    });

    // Disabled
    const [disabled, setDisabled] = useState(true);
    // Errors
    const [formErrors, setFormErrors] = useState(initialFormErrors);


    const { push } = useHistory();

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      validate(name, value);
      setState({
        credentials: { ...state.credentials, [name]: value },
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

    // Validation

    useEffect(() => {
      formSchema.isValid(state.credentials).then((valid) => setDisabled(!valid));
    }, [state.credentials]);
  
    const validate = (name, value) => {
      yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: "" }))
        .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
    };

  return (
      <StyledLogin>
        <h2>Login</h2>

        <Form onSubmit={login}>

        <FormGroup>
          <Label for="username">Username:</Label>

          <Input
        
        onChange={handleChange}
            type="text"
            name="username"
            value={state.credentials.username}

            invalid={!!formErrors.username}
    
            valid={
              formErrors.username !== ""
                ? false
                : state.credentials.username
                ? true
                : false
            }
          />
          <FormFeedback>{formErrors.username}</FormFeedback>
        </FormGroup>

 
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              value={state.credentials.password}
              // invalid=true if the error string is not empty, invalid=false if the error string is empty
              invalid={!!formErrors.password}
              // if the error is an not an empty string then valid=false, if the error is an empty string then check if the value is empty or not, if the value is empty then valid = false, if the value is not empty then the valid=true
              valid={
                formErrors.password !== ""
                  ? false
                  : state.credentials.password
                  ? true
                  : false
              }
            />
            <FormFeedback>{formErrors.password}</FormFeedback>
          </FormGroup>

          <Button disabled={disabled}>Login</Button>
        </Form>



      {/* <form onSubmit={login}>
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
      </form> */}
    </StyledLogin>
  )
}
