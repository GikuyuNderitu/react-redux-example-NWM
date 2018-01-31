import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CHANGE_COLOR,
  SUBMIT_INPUT,
  INCREMENT,
  DECREMENT
} from './index';

/* 
  At the top of the file we're importing the connect function from the react-redux package

  We are also importing all of the types that we defined in our index file. We need them to later dispatch our actions
*/

class InputArea extends Component {

  constructor(props) {
    super(props);

    this.state = {input: ''};

    this.changeColor = this.changeColor.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(e) {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  changeColor(e) {
    const {value, name} = e.target

    this.props.changeColor(value);
  }
  
  render() {
    const { input } = this.state;
    const { color } = this.props;
    const submitInput = val => val
    return (
      <div style={{textAlign: 'center', margin: '50px 0'}}>
        <div className="row">
          <label>Type in box to change the text of hover text</label>

          <input name="input" type="text" onChange={this.changeInput} value={input} />
          <button onClick={() => this.props.submitInput(input)}>Submit Input</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <select onChange={this.changeColor} style={{color: color, alignSelf: 'center'}} name="color" value={color} id="">
            <option style={{color: 'red'}} value="red">Red</option>
            <option style={{color: 'green'}} value="green">Green</option>
            <option style={{color: 'black'}} value="black">Black</option>
            <option style={{color: 'skyblue'}} value="skyblue">Blue</option>
            <option style={{color: 'hotpink'}} value="hotpink">Hot Pink</option>
          </select>
        </div>
        <div className="row">
          <label>Click buttons to change count</label>
          <div className="buttons">
            <button onClick={() => this.props.changeNumber(1)}>Increment</button>
            <button onClick={() => this.props.changeNumber(-1)}>Decrement</button>
          </div>
        </div>
      </div>
    )
  }
}

/* 
  This is a function that takes in the entire redux state and returns an object. 
  We have elected to return an object that has the property color.
  We get the values of that property from our state object that we received
*/

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

/* 
  This is a function that takes in the redux dispatcher and returns an object. 
  We have elected to return an object that has the properties changeColor, submitInput and changeNumber.
  The values for those properties are functions that may or may not receive a parameter it then uses the dispatch function to dispatch an action.
*/

const mapDispatchToProps = (dispatch) => {
  return {
    changeColor(color) {
      dispatch({type: CHANGE_COLOR, payload: color})
    },
    submitInput(payload) {
      dispatch({type: SUBMIT_INPUT, payload})
    },
    changeNumber(number) {
      if(number === 1) dispatch({type: INCREMENT});
      else dispatch({type: DECREMENT});
    }
  }
}


// Notice, we can immediately export our wrapped component
export default connect(mapStateToProps, mapDispatchToProps)(InputArea);