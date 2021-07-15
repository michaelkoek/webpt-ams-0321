import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./example/pages/Home";
import ComplaintsCards from "./example/pages/ComplaintsCards";
import ComplaintsForm from "./example/pages/ComplaintsForm";
import Header from "./example/components/layout/Header";
import Footer from "./example/components/Footer";

import {
  ResetStyles,
  ProjectTheme,
  AltProjectTheme,
} from "./example/utils/globalStyles";

// import UseStateExample from "./example/lecture/UseState";
// import Counter from "./example/lecture/Counter";

function App() {
  const [formData, setFormData] = useState({});
  const [toggleTheme, setToggleTheme] = useState(false);

  useEffect(() => {
    // trigger on dependency
  }, [toggleTheme]);

  const handleFormData = (formData) => {
    setFormData({ ...formData });
  };

  return (
    <ThemeProvider theme={ProjectTheme}>
      <ResetStyles />
      {/* <UseStateExample /> */}
      {/* <Counter /> */}
      <Header>Iron Hack Complaints Form</Header>

      <Main>
        <Switch>
          <Route exact path="/">
            <Link to="/form">
              <Home />
            </Link>
          </Route>
          <Route path="/form">
            <ComplaintsForm myFormData={handleFormData} />
          </Route>
          <Route path="/overview">
            <ComplaintsCards cards={formData} />
          </Route>
        </Switch>
      </Main>

      <Footer>&copy; WEB DEV 0321 | Iron Hack </Footer>
    </ThemeProvider>
  );
}

const Main = styled.main`
  flex: 10;
  height: 100%;
`;

export default App;
