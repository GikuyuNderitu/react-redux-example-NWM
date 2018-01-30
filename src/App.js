import React from 'react';
import Title from './Title';
import InputArea from './InputArea';
import NumDisplay from './NumDisplay';
import './App.css';

export default function(props) {
  return (
    <div className="App">
      <Title />
      
      <InputArea />

      <NumDisplay />
    </div>
  )
}