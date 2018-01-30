import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    number: state.counter
  }
};

export default connect(mapStateToProps)(function(props) {
  return (
    <div style={{textAlign: 'center', fontSize: '1.8em'}}>
      {props.number || 0}
    </div>
  )
})