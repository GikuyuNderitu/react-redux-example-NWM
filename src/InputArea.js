import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CHANGE_COLOR,
  SUBMIT_INPUT,
  INCREMENT,
  DECREMENT
} from './index';

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
  
  changeNumber(num) {
    console.log(num);
  }
  render() {
    const { input} = this.state;
    const {color} = this.props;
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

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

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


export default connect(mapStateToProps, mapDispatchToProps)(InputArea);