import React from 'react';
import SliderComponent from './components/SliderComponent';
import './App.css';

function App() {
  return (
    <div className="App" >
      <h1>Bierdeckelrechner für Immobilien</h1>
      <SliderComponent
        title='Kaufpreis'
        value={30000}
        min={20000}
        max={20000}
        step={1}
        color='#e03145'
        handleSliderChange={() => console.log('done')}
        disabled={false}
      />
    </div>
  );
}

export default App;
