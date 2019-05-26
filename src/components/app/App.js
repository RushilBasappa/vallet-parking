import React from 'react';
import './App.css';
import { carDump, companyDump, space } from '../../database';
import { ReactComponent as Logo } from 'assets/car.svg';

const divStyle = {
  width: '100px',
  height: '100px',
};

function App() {
  return (
    <div>
      <button className="ui button">Testing</button>
    </div>
  );
}

export default App;
