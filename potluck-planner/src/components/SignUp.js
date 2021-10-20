import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from "react-router";

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

const StyledSignUp = styled.div`
margin: 0 auto;
margin-top: 5%;
margin-bottom: 5%;
padding: 4% 3%;
width: 40%;
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





export default function SignUp() {
    const [form, setForm] = useState({
        credentials: {
          username: "",
          password: "",
        },
      });

    const { push } = useHistory();
    
    const handleChange = (e) => {
        setForm({
          credentials: { ...form.credentials, [e.target.name]: e.target.value },
        });
    };

    const userSignUp = (e) => {
        e.preventDefault();
        axios
          .post("https://bw-potluck-102021.herokuapp.com/api/auth/register", form.credentials)
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            push("/login");
          })
          .catch((err) => {
            console.log(err.response);
          });
      };

    return (
        <StyledSignUp>
          <h2>Sign Up</h2>
        <Form onSubmit={userSignUp}>
          <FormGroup>
          <Label for="username">Username:</Label>
            <Input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
         
          <Label>Password:</Label>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </FormGroup>
          <Button>Login</Button>
        </Form>
        </StyledSignUp>
    )
}



// <div>
// <h2>Please Create An Account</h2>
// <form onSubmit={userSignUp}>
// <label>
//   Username:
//   <input
//     type="text"
//     name="username"
//     value={form.username}
//     onChange={handleChange}
//   />
// </label>
// <label>
//   Password:
//   <input
//     type="text"
//     name="password"
//     value={form.password}
//     onChange={handleChange}
//   />
// </label>
// <button>Login</button>
// </form>
// </div>