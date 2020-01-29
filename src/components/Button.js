import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Button = ({ button, toggle, connect }) => {
  let color;
  if (button.data === "OFF") {
    color = 'btn-danger';
  } else if (button.data === "ON") {
    color = 'btn-primary';
  }

  useEffect(() => {
    connect();
  }, [connect])
  
  return (
    <div className="jumbotron">
      <button
        id = "main_btn"
        onClick={() => {toggle()}}
        className={`btn ${color} btn-lg`}>{ button.data }</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    button: state
  };
};

export default connect(mapStateToProps, actions)(Button);
