import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(() => event.target.value)
  } 

  return(
    <form onSubmit={(event) => {
      event.persist();
      event.preventDefault();
    }}>
      <input
        type='text'
        value={inputValue}
        onChange={() => handleChange(event)}
      />
      <h1>{inputValue}</h1>
    </form>
  );
}

export default App;

const wrapper = document.getElementById('appContainer');
wrapper ? ReactDOM.render(<App />, wrapper) : false;