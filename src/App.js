import React from 'react';
import Test from "./Test";
import HeaderBar from "./HeaderBar/HeaderBar";
import { Button } from 'carbon-components-react';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar/>
      </header>
      <Button>Hello React!</Button>
      <Test/>
    </div>
  );
}

export default App;
