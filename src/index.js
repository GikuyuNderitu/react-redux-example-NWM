import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

/*
  This section is doing two things, 

  1. It is defining constant variables that we will use as types
  2. It is adding all of the defined variables to the export object

*/
export const INCREMENT = 'ASDFKASJDFO-A28';
export const DECREMENT = 'ASDFKASJDFO-A22';
export const SUBMIT_INPUT = 'DFASDFKASJDFO-A22';
export const CHANGE_COLOR = '-A22';

const initialState = {
  color: 'red',
  counter: 0,
  text: 'Hover Me'
};

/*
  The reducer function takes in state and an action

  Based off of the action.type, it returns a new state
*/
function reducer(state=initialState, action) {
  switch(action.type) {
    case INCREMENT:
     return {...state, counter: state.counter + 1};
    case DECREMENT:
     return {...state, counter: state.counter - 1};
    case SUBMIT_INPUT:
      return {...state, text: action.payload};
    case CHANGE_COLOR:
      return {...state, color: action.payload};
    default:
      return state;
  }
}

/*
  The store variable receives a reducer and a bunch of enhancers. (the compose function, imported at the top of the file, takes in multiple enhancers and returns a big enhancer function. We will talk about it in later in class)
*/

const store = createStore(
  reducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const Root = () => (
  /*
    We pass the store as a prop to the Provider Component. We need to use the Provider component so that components further down our component tree have access to the values in store
  */
  <Provider store={store} >
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
