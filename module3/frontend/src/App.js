import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./example/pages/Home";
import Login from "./example/pages/Login";
import Logout from "./example/pages/Logout";
import ComplaintsCards from "./example/pages/ComplaintsCards";
import ComplaintsForm from "./example/pages/ComplaintsForm";
import Header from "./example/components/layout/Header";
import Footer from "./example/components/Footer";

import PrivateRoute from "./example/utils/PrivateRoute";
import AuthContext from "./example/utils/AuthContext";

import { ResetStyles, ProjectTheme } from "./example/utils/globalStyles";

function App() {
  const [formData, setFormData] = useState({});

  const handleFormData = (formData) => {
    setFormData({ ...formData });
  };

  return (
    <AuthContext>
      <ThemeProvider theme={ProjectTheme}>
        <ResetStyles />

        <Header>
          Iron Hack Complaints Form
          <div>
            <Link to="/">home</Link>
            <Link to="/login">login</Link>
            <Link to="/logout">logout</Link>
            <Link to="/form">FORM</Link>
          </div>
        </Header>

        <Main>
          <Switch>
            <Route exact path="/">
              <Link to="/form">
                <Home />
              </Link>
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/logout">
              <Logout />
            </Route>

            <PrivateRoute path="/form">
              <ComplaintsForm myFormData={handleFormData} />
            </PrivateRoute>

            <PrivateRoute path="/overview">
              <ComplaintsCards cards={formData} />
            </PrivateRoute>
          </Switch>
        </Main>

        <Footer>&copy; WEB DEV 0321 | Iron Hack </Footer>
      </ThemeProvider>
    </AuthContext>
  );
}

const Main = styled.main`
  flex: 10;
  height: 100%;
`;

export default App;
