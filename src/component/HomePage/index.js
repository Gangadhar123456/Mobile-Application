// src/component/HomePage.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = ({ username }) => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = () => {
    fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
      .then((response) => response.json())
      .then((data) => setJokes(data.jokes))
      .catch((error) => console.error('Error fetching jokes:', error));
  };

  const fetchNewJokes = () => {
    fetchJokes();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Welcome, {username}!</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={index}>
                <td>{joke.category}</td>
                <td>{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary" onClick={fetchNewJokes}>
        Fetch New Jokes
      </button>
    </div>
  );
};

export default Homepage;
