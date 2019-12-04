import { SMURFS_LOADING_START, SMURFS_LOADING_SUCCESS, SMURFS_LOADING_FAILED, ADD_NEW_SMURF } from '../actions/index.js';


const initialState = {
    smurf: { name: 'Brainey', age: 0, height: '', id: '' },
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
            smurf: {...state.smurf.data, name:action.payload.name, age: action.payload.age, height: action.payload.height, id: action.payload },
            isLoading: false
          };
        case ADD_NEW_SMURF:
            return {
                ...state,
                smurf: {...state.smurf.data, name:action.payload, age:action.payload, height:action.payload}
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


