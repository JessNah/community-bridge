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
      <div>
        <div className={"HeaderGradient"}>
          <Button>Hello React!</Button>
          <Test/>
        </div>
        <svg className="curve-container" viewBox="0 0 1440 68" enableBackground="new 0 0 1440 68">
          <path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" fill="#fff" transform="translate(0-1977)"></path>
        </svg>
      </div> 
    </div>
  );
}

export default App;
