import React from "react";
import { connect } from "react-redux";
import { getSmurfsData } from "../actions/index.js";
import SmurfCard from './smurfCard'

const SmurfData = props => {  

    return (
        <>
          <div
            onLoad={() => {
              props.getSmurfsData();
            }}
          >
            Smurfs
          </div>
          {props.error && <div>{props.error}</div>}
          {props.isLoading ? (
            <div>loading data...</div>
          ) : (
            <>
            {props.smurf.map(data => {
              if(data.id < 10) {
                return(
                  <div>
                    
                    <SmurfCard name={data.name} age={data.age} height={data.height} />
                    
                  </div>
                )
              }
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
