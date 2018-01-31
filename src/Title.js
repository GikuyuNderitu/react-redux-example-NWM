import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
  HoverText is a Stateless Functional Component (Dumb Component). It receives props and returns a React.element
*/
const HoverText = (props) => {
  return (
    <span
      onMouseEnter={() => props.setHovered(true)}
      onMouseLeave={() => props.setHovered(false)}
      style={props.hovered ? {color: props.hoverColor} : {}}>
      {props.hoverText}
    </span>
  )
}

/* 
  This is a function that takes in the entire redux state and returns an object. 
  We have elected to return an object that has the properties hoverText and hoverColor.
  We get the values for those properties from our state object that we received
*/

const mapStateToProps = (state) => {
  console.log(state);
  return {
    hoverText: state.text,
    hoverColor: state.color
  }
}

/*
  We've declared a constant variable HoverTextWrapped. 
  It's value is a component that is returned by connect(mapStateToProps)(HoverText)
*/

const HoverTextWrapped = connect(mapStateToProps)(HoverText)



/*
  Notice how the Title Component is able to pass its own props to HoverTextWrapped Component, 
  but it has no idea about the props that redux is passing to the HoverText Component
*/
class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    }

    this.setHovered = this.setHovered.bind(this);
  }

  setHovered(hovered) {
    this.setState({hovered})
  }

  render() {
    return (
      <div style={{margin: '0 auto', textAlign: 'center', fontSize: '4em'}}>
        <div>
          Title Section
        </div>
        <HoverTextWrapped
          setHovered={this.setHovered}
          hovered={this.state.hovered} />
      </div>
    )
  }
}

export default Title;