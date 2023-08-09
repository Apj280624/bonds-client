import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/common/LoginInput";

import styles from "../css/login-page.module.css";
import vars from "../utils/client_vars";

import axios from "axios";

const LoginPage = () => {
  const [creds, setCreds] = useState({ email: "", password: "" });

  const role = window.location.href.split("/")[3];
  const navigate = useNavigate();

  const handleCredsChange = (e) => {
    // console.log(e.target.name);
    setCreds((prevCreds) => {
      const newCreds = { ...prevCreds, [e.target.name]: e.target.value };
      // console.log(newCreds);
      return newCreds;
    });
  };

  const login = async () => {
    try {
      const response = await axios.post(
        vars.SERVER_ORIGIN + "/api/" + role + "/login",
        creds
      );
      console.log(response);
      localStorage.setItem("token", response.data.token);
      navigate("/" + role + "/dashboard");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <div className={styles.formDiv}>
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
      <button className={styles.loginBtn} onClick={login}>
        Login
      </button>{" "}
    </div>
  );
};

export default LoginPage;
