import React, { useEffect, useState } from "react";
import styles from "../../css/login-input.module.css";

function LoginInput(props) {
  // console.log(props);

  function handleChange(e) {
    props.onChange(e);
  }

  return (
    <input
      className={styles.loginInput}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={handleChange}
    />
  );
}

export default LoginInput;
