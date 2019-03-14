import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollAnimation from './ScrollAnimation';
import { Chance } from 'chance';
import { getCharacters } from './services/rickAndMorty';

const chance = new Chance();

export default function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setLoading(true);
    getCharacters(currentPage)
      .then(({ totalPages, characters }) => {
        setCharacters(characters)
        setTotalPages(totalPages)
        setLoading(false)
      });
  }, [currentPage])

  return (
    <div className="App">
      <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
      <section>{currentPage} / {totalPages}</section>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      {loading ? <h1>LOADING</h1> : <ul>
        {characters.map(character => <li key={character.id}>{character.name}</li>)}
      </ul>}
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
