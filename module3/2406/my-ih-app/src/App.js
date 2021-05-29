import React, { Component } from 'react';

import './App.css';
import Tile from './components/Tile';
import Button from './components/Button';

class App extends Component {

  state = {
    counter: 0,
    title: '',
    people: [],
    loading: false,
  }

  componentDidMount() {

    this.setState(prevState => ({ loading: true }))

    // Simulate fetch data from the API
    setTimeout(() => {
      const addedPeople = [
        { name: 'joanna', age: 24},
        { name: 'john', age: 56},
        { name: 'james', age: 6},
        { name: 'jacob', age: 14},
      ]
  
      this.setState((prevState) => ({
        people: [
          ...prevState.people,
          ...addedPeople,
        ],
        loading: false
      }));

    }, 4000)
  }

  handlerClickEvent = () => {
    console.log('clicking')
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }

  render() {
    
    console.log(this.state)

    return (
      <div className="App">
        {
        this.state.loading ?
          <h1>...LOADING</h1>
          :
          <>
            <h1>count: {this.state.counter}</h1>

            <Button disabled={this.state.counter >= 10} title="boom" type="primary" myOnClick={this.handlerClickEvent}>
              Click on me
            </Button>

            {this.state.counter >= 10 ?
              <Button> Dont press me </Button> : 
              <section>{<Tile />}</section>
            }

            {this.state.people.map(person => (
              <Tile key={person.name} name={person.name} age={person.age} />
            ))}
          </>
        }
      </div>
    );
  }
}

export default App;
