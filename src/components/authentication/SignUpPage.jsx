import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";

function SignUpPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(currentUser);
  });

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

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message + "Error during registration");
    }
  };

  const logout = async () => {
    await signOut(auth);
    console.log("User logged out");
  };

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
        <Button onClick={login}>Login</Button>
      </div>
      <div>
        <h3>User Logged in:</h3>
        {user?.email}
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
}

export default SignUpPage;
