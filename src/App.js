import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollAnimation from './ScrollAnimation';
import { Chance } from 'chance';

const chance = new Chance();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <ScrollAnimation enter="enter" exit="exit">
            <p>{chance.sentence()}</p>
          </ScrollAnimation>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
