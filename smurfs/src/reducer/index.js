import { SMURFS_LOADING_START, SMURFS_LOADING_SUCCESS, SMURFS_LOADING_FAILED } from '../actions/index.js';


const initialState = {
    smurf: { name: '', age: 0, height: '', id: 0 },
    isLoading: false,
    error: '',
     
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SMURFS_LOADING_START:
          return {
            ...state,
            isLoading: true
          };
        case SMURFS_LOADING_SUCCESS:
          return {
            ...state,
            name: action.payload,
            age: action.payload,
            height: action.payload,
            isLoading: false
          };
        case SMURFS_LOADING_FAILED:
          return {
            ...state,
            error: action.payload,
            isLoading: false
          };
        default:
          return state;
      }
};


