import { decrement, increment, incrementByAmount, init } from "../actions";


export default function accountReducer(state={amount: 1}, action) { /*reducer function */
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
}