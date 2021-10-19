import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from "react-router";


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
        <div>
            <div>
          <h2>Please Create An Account</h2>
        <form onSubmit={userSignUp}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <button>Login</button>
        </form>
      </div>
        </div>
    )
}
