import React from 'react';

import FirstColumn from './components/FirstColumn/FirstColumn';
import SecondColumn from './components/SecondColumn/SecondColumn';
import ThirdColumn from './components/ThirdColumn/ThirdColumn';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="flex flexBody">
        <FirstColumn />
        <SecondColumn />
        <ThirdColumn />
      </div>
    );
  }
}

export default App;
