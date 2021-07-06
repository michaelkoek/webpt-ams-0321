import React, { Component } from "react";
import styled from "styled-components";

import Form from "./components/Form";
import Container from "./example/components/Container";
import Button from "./example/components/Button";
import Card from "./example/components/Card";

import "./App.css";
class App extends Component {
  state = {
    toggleMenu: true,
  };

  handleToggleMenu = () => {
    this.setState((prevState) => ({
      toggleMenu: !prevState.toggleMenu,
    }));
  };

  render() {
    console.log("hallo");

    return (
      <AppWrapper>
        <Header>
          <Container>
            <h1>Iron Hack Complaints Form</h1>
          </Container>
        </Header>

        <Main className="app">
          {this.state.toggleMenu ? (
            <Button btnType="primary" buttonClick={this.handleToggleMenu}>
              Start
            </Button>
          ) : (
            <Form />
          )}

          <Container>
            <div className="card-container">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </Container>
        </Main>

        <Footer>
          <Container>&copy; WEB DEV 0321 | Iron Hack</Container>
        </Footer>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  flex: 1;
  padding: 1.5rem;
`;
const Footer = styled.footer`
  flex: 1;
  background-color: tomato;
  padding: 1.5rem;
`;
const Main = styled.main`
  flex: 10;
`;

export default App;
