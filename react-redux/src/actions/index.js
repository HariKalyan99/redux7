import axios from 'axios'

//acion name constants
export const init = 'init'
export const increment = 'increment'
export const decrement = 'decrement'
export const incrementByAmount = 'incrementByAmount'
export const incrementBonus = 'incrementBonus'





//action creaters

export function getUser(id) {
    return async(dispatch, getState) => {
        const {data} = await axios.get(`http://localhost:3000/account/${id}`);
        const {amount} = data;
        dispatch(initfn(amount));
    }
    
}

export function initfn(val){
    return {type: init, payload: val}
}

export function incrementfn() {
    return {type: increment}
}

export function decrementfn() {
    return {type: decrement}
}

export function incrementByAmountfn(val) {
    return {type: incrementByAmount, payload: Number(val)}
}

export function incrementBonusFn() {
    return {type: incrementBonus}
}