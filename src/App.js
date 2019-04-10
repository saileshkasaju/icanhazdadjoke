import React, { useState, useEffect } from 'react';

export default function App() {
  const [joke, setJoke] = useState({ joke: '' });
  const api = 'https://icanhazdadjoke.com';
  const getData = async () =>
    fetch(api, { headers: { accept: 'application/json' } })
      .then(data => data.json())
      .then(data => setJoke(data));

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {joke.joke}
      <button onClick={getData}>Get new joke</button>
    </div>
  );
}
