import { BEGIN, GOOD, FAIL } from '../actions/action'

const initialState = {
    smurfs: [],
    error: ''
};

export const reducer = ( state = initialState, action ) => {
    console.log('REDUCER', action);
    switch(action.type){
        case BEGIN:
            return{
                ...state,
                error: '',  
            };
        case GOOD:
            return{
                ...state,
                error: '',
            };
        case FAIL:
            return{
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }

}