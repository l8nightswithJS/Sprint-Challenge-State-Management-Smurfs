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
            {props.smurf.map(data => {
                return(
                    <div>    
                    <h1>Smurf name: {data.name}</h1>
                    <h1>Age: {data.age}</h1>
                    <h1>Height: {data.height}</h1>
                    </div>
                )
            })}
              
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
