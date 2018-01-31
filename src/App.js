import React from 'react';
import Title from './Title';
import InputArea from './InputArea';
import NumDisplay from './NumDisplay';
import './App.css';

/*
  We've imported the default exported value from each file/package
*/



/* 
  Notice what we are exporting in this file. 

  We haven't given our function a name, we're just exporting the value of a function that returns the exported JSX elements (Remember, JSX is syntactic sugar for React.createElement)

  Look at how we're using the components that we're importing from other files, Title, InputArea and Num Display. The app component is not explicitly passing them props
*/
export default function(props) {
  return (
    <div className="App">
      <Title />
      
      <InputArea />

      <NumDisplay />
    </div>
  )
}