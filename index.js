import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import {thunk} from 'redux-thunk';

const init = 'init'
const increment = 'increment'
const decrement = 'decrement'
const incrementByAmount = 'incrementByAmount'
const incrementBonus = 'incrementBonus'


const store = createStore(combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
}), applyMiddleware(logger.default, thunk)); /*gloabl store*/ 

//acion name constants






function accountReducer(state={amount: 1}, action) { /*reducer function */
    switch(action.type){
        case init: 
            return {amount: action.payload};
        case increment: 
            return {amount: state.amount + 1};
        case decrement:
            return {amount: state.amount - 1};
        case incrementByAmount: 
            return {amount: state.amount + action.payload};
        default:
            return state;
    }


// if(action.type === increment){
//         return {amount: state.amount + 1}; /* we need to create a copy, as state is immutable*/ 
//     }else if(action.type === decrement){
//         return {amount: state.amount - 1}; /* we need to create a copy, as state is immutable*/ 
//     }else if(action.type === incrementByAmount){
//         return {amount: state.amount + action.payload}; /* we need to create a copy, as state is immutable*/ 
//     }
    // return state;
}


function bonusReducer(state={points: 0}, action){
    switch (action.type){
        case incrementBonus:
                return {points: state.points + 1};
        default:
            return state; 
    }
}


// let history = [];

// store.subscribe(() => {
//     history.push(store.getState())
//     console.log(history)
// })


//async api call

// async function getUser() {
//    const {data} = await axios.get('http://localhost:3000/account/');
//    console.log(data);
// }

// getUser()


//action creaters

 function getUser(id) {
    return async(dispatch, getState) => {
        const {data} = await axios.get(`http://localhost:3000/account/${id}`);
        const {amount} = data;
        dispatch(initfn(amount));
    }
    
}

function initfn(val){
    return {type: init, payload: val}
}

function incrementfn() {
    return {type: increment}
}

function decrementfn() {
    return {type: decrement}
}

function incrementByAmountfn(val) {
    return {type: incrementByAmount, payload: val}
}

function incrementBonusFn() {
    return {type: incrementBonus}
}

// setInterval(() => {
//       /* eventDriver, as it comes from the event listeners*/
//   store.dispatch(incrementfn()) /*dispatch function with an action*/
// }, 2000)

setTimeout(() => {
    /* eventDriver, as it comes from the event listeners*/
store.dispatch(getUser(2)) /*dispatch function without an action as thunk is imported as dispatch has a definition rather than an object*/
}, 2000)

// middleWARES ?


