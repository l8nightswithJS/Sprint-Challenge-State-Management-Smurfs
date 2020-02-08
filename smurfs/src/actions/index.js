import axios from 'axios';

export const SMURFS_LOADING_START = 'SMURFS_LOADING_START';
export const SMURFS_LOADING_SUCCESS = 'SMURFS_LOADING_SUCCESS';
export const SMURFS_LOADING_FAILED = 'SMURFS_LOADING_FAILED';
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';

// export const
export const addNewSmurf = (props) => dispatch => {
    console.log(props)

    // dispatch({ 
    //     type: ADD_NEW_SMURF,
    //     payload: props
    // });
    axios.post(`http://localhost:3333/smurfs/`, props )
      .then(res => {
        dispatch({ 
            type: ADD_NEW_SMURF,
            payload: res.data
        });  
        console.log(res);
        console.log(res.data);
      }).catch(err => console.log(err.message))
    
}

export const getSmurfsData =  () => dispatch => {
    dispatch({ type: SMURFS_LOADING_START});

    axios
        .get('http://localhost:3333/smurfs/')
        .then(res => {
                dispatch(
                    {
                    type: SMURFS_LOADING_SUCCESS,
                    payload: res.data
                    }
                )
                console.log(res.data);    
                }
        ).catch(err => console.log(err));
}

export const deleteSmurf = (props) => dispatch => {
    dispatch({ type: DELETE_SMURF});

    axios
        .delete(`http:localhost:3333/smurfs/${props.id}`)
        console.log(props);
}