import React, { Component } from 'react';
import { connect } from 'react-redux';


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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    hoverText: state.text,
    hoverColor: state.color
  }
}

const HoverTextWrapped = connect(mapStateToProps)(HoverText)



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