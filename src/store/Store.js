import {createStore} from 'redux';

const initialState = 0

const countReducer = (state = initialState,action) => { 
    return state
}


export const store = createStore(countReducer)