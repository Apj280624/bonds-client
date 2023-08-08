import React, { useState } from "react";
import LoginInput from "../components/common/LoginInput";

import styles from "../css/login-page.module.css";

import vars from "../utils/client_vars";

import axios from "axios";

// console.log(axios);

console.log(vars.SERVER_ORIGIN);
const RegisterPage = () => {
  const [creds, setCreds] = useState({ name: "", email: "", password: "" });

  const handleCredsChange = (e) => {
    setCreds((prevCreds) => {
      const newCreds = { ...prevCreds, [e.target.name]: e.target.value };
      // console.log(newCreds);
      return newCreds;
    });
  };

  const register = async () => {
    try {
      const response = await axios.post(
        vars.SERVER_ORIGIN + "/api/user/register",
        creds
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.formDiv}>
      <LoginInput
        placeholder="Name"
        name="name"
        value={creds.name}
        onChange={handleCredsChange}
      />
      <LoginInput
        placeholder="Email"
        name="email"
        value={creds.email}
        onChange={handleCredsChange}
      />
      <LoginInput
        placeholder="Password"
        name="password"
        value={creds.password}
        onChange={handleCredsChange}
      />
      <button className={styles.loginBtn} onClick={register}>
        Register
      </button>{" "}
    </div>
  );
};

export default RegisterPage;
