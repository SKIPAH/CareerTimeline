import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

function SignUpPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message + "Error during registration");
    }
  };

  const login = async () => {};

  const logout = async () => {};

  return (
    <div>
      <div>
        <h2>Register User</h2>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <Button onClick={register}>Create User</Button>
      </div>
      <div>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <Button>Login</Button>
      </div>
      <div>
        <h3>User Logged in:</h3>
        {/*{auth.currentUser.email}*/}
        <Button>Logout</Button>
      </div>
    </div>
  );
}

export default SignUpPage;
