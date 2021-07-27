import React, { useState } from "react";

import Input from "../components/Form/Input";
import Container from "../components/Container";
import Button from "../components/Button";

import { useAuth } from "../utils/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({});

  const { login, isAuth } = useAuth();

  const onLoginSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT FORM", credentials);
    login(credentials);
  };

  const onHandleElements = (event) => {
    const { name, value } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log("Login=>", isAuth);

  return (
    <Container>
      <form onSubmit={onLoginSubmit}>
        <Input label="Username" name="username" onChange={onHandleElements} />
        <Input
          label="Password"
          name="password"
          type="password"
          onChange={onHandleElements}
        />
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default Login;
