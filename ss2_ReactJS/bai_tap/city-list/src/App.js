import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  const cities = ["Sài Gòn", "Đà Nẵng", "Hà Nội"];

  const listItems = cities.map((item, index) => React.createElement('li', { key: index }, item));

  const ul = React.createElement('ul', null, listItems);

  const h1 = React.createElement('h1', { style: { color: 'red' } }, 'Danh sách thành phố');

  return React.createElement('div', null, h1, ul);
}

export default App;

/**return (
      <div>
        <h1>List of City</h1>
        <ul>
          {cities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    ) */