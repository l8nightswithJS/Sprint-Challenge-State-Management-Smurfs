import React from "react";
import { connect } from "react-redux";
import { getSmurfsData } from "../actions/index.js";

const SmurfData = props => {
    console.log(props)
    return (
      <>
        <button
        onClick={() => {
          props.getSmurfsData();
        }}
        >
        get Smurfs
        </button>
        {props.error && <div>props.error</div>}
        {props.isLoading ? (
        <div>loading data...</div>
        ) : (
        <div>
        <h1>Smurf's name: {props.name}</h1>
        <p>age: {props.age}</p>
        <p>height: {props.height}</p>
        </div>

        )}    
      </>  
    );
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      error: state.error,
      smurfs: state.smurf
    };
  };
  
  export default connect(
    mapStateToProps,
    { getSmurfsData }
  )(SmurfData);
