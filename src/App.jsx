import React from 'react';
import './App.css';
import Configurator from "./containers/Configurator";

const App = () => (
    <div className="App">
      <header className="App-header">
        <p>
          Use this interface to compose the configuration for you image processing!
        </p>
      </header>
        <Configurator/>
    </div>
  )

export default App;
