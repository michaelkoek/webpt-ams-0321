import React from "react";

import { useAuth } from "../utils/AuthContext";
import Container from "../components/Container";

const Login = () => {
  const { logout } = useAuth();

  logout();

  return <Container>LOGOUT</Container>;
};

export default Login;
