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
      hello
      <div style={divStyle}>
        <Logo />
      </div>
    </div>
  );
}

export default App;
