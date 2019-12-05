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
            Smurfs
          </button>
          {props.error && <div>{props.error}</div>}
          {props.isLoading ? (
            <div>loading data...</div>
          ) : (
            <>
              <h1>Smurf name: {props.smurf.name}</h1>
              <h1>Age: {props.smurf.age}</h1>
              <h1>Height: {props.smurf.height}</h1>
            </>
          )}
        </>
        
      );
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      error: state.error,
      smurf: state.smurf
    };
  };
  
  export default connect(
    mapStateToProps,
    { getSmurfsData }
  )(SmurfData);
