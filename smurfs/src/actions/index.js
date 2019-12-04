import axios from 'axios';

export const SMURFS_LOADING_START = 'SMURFS_LOADING_START';
export const SMURFS_LOADING_SUCCESS = 'SMURFS_LOADING_SUCCESS';
export const SMURFS_LOADING_FAILED = 'SMURFS_LOADING_FAILED';
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
// export const
export const addNewSmurf = () => dispatch => {
    dispatch({ type: ADD_NEW_SMURF});
}

export const getSmurfsData =  () => dispatch => {
    dispatch({ type: SMURFS_LOADING_START});

    axios
        .get('http://localhost:3333/smurfs/')
        .then(res => { 
            dispatch({
                type: SMURFS_LOADING_SUCCESS,
                payload: (res.data[0])
                })
            console.log(res.data);    
            }
        )
        .catch(err => console.log(err));
}

// export const thunk_action_creator = () => dispatch => {
//     dispatch({ type: SMURFS_LOADING_START})
//     return function(dispatch, getState) {
//       return fetch(`http://localhost:3333/smurfs`)
//         .then(data => data.json())
//         .then(data => {
//           if (data.message === "Not Found") {
//             throw new dispatch(SMURFS_LOADING_FAILED);
//           } else dispatch(SMURFS_LOADING_SUCCESS(data));
//         })
//         .catch(err => dispatch(SMURFS_LOADING_FAILED(err)));
//     };
//   };