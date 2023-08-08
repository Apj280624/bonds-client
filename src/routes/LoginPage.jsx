import React, { useState } from "react";
import LoginInput from "../components/common/LoginInput";

import styles from "../css/login-page.module.css";

const LoginPage = () => {
  const [creds, setCreds] = useState({ email: "", password: "" });

  const handleCredsChange = (e) => {
    // console.log(e.target.name);
    setCreds((prevCreds) => {
      const newCreds = { ...prevCreds, [e.target.name]: e.target.value };
      console.log(newCreds);
      return newCreds;
    });
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
      <button className={styles.loginBtn}>Login</button>{" "}
    </div>
  );
};

export default LoginPage;
