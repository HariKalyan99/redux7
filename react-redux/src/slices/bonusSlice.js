import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    points: 1,
}

const incrementByAmountfnfromAcc = createAction('account/incrementByAmountfn')

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        incrementBonusFn: (state) => {
            state.points += 1  //immer library included, so mutating ability is an advantage
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementByAmountfnfromAcc,  (state, action) => {
            if(action.payload >= 100){
                state.points += 12;
            }
        }) 
    }
})


export const {incrementBonusFn} = bonusSlice.actions;

export default bonusSlice.reducer;