import React, { useState } from 'react';
import { BEGIN, GOOD, FAIL, POST_PASS, POST_FAIL, POST_START } from '../actions/action'

const initialState = {
    smurfs: [],
    isLoading:false,
    error: ''
};


export const reducer = ( state = initialState, action ) => {
    console.log('REDUCER', action);
    switch(action.type){
        case BEGIN:
            return{
                ...state,
                isLoading:true,
                error: null,  
            };
        case GOOD:
            return{
                ...state,
                smurfs:action.payload,
                error: null,
            };
        case FAIL:
            return{
                ...state,
                error: action.payload,
            }
        case POST_START:
            return{
                ...state,
                isLoading:true,
                error:null,
            }
        case POST_PASS:
            return{
                ...state,
                smurfs:action.payload,
                error:null,
            }
        case POST_FAIL:
            return{
                ...state,
                error:action.payload,
            }
        default:
            return state;
    }

}