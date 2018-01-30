import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

export const INCREMENT = 'ASDFKASJDFO-A28';
export const DECREMENT = 'ASDFKASJDFO-A22';
export const SUBMIT_INPUT = 'DFASDFKASJDFO-A22';
export const CHANGE_COLOR = '-A22';

const initialState = {
  color: 'red',
  counter: 0,
  text: 'Hover Me'
};

// 
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

const store = createStore(
  reducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const Root = () => (
  <Provider store={store} >
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
