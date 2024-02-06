import { createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
    points: 10,
}

export const incrementRewardFn = createAction('incrementRewardFn')
export const incrementByRewardFn = createAction('incrementByRewardFn')


const rewardReducer = createReducer(initialState, (builder) => {
    builder.addCase(incrementRewardFn, (state, action) => {
        state.points++
    }).addCase(incrementByRewardFn, (state, action) => {
        state.points += action.payload
    })
}) 

export default rewardReducer;