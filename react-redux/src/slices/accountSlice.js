import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    amount: 1,
}


export const fetchUserById = createAsyncThunk(
    'getUser',
    async(userId, thunkAPI) => {
        const {data} = await axios.get(`http://localhost:8082/account/${userId}`);
        const {amount} = data;
        return amount
    }
)

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        incrementfn: (state) => {
            state.amount += 1  //immer library included, so mutating ability is an advantage
        },
        decrementfn: (state) => {
            state.amount -= 1
        },
        incrementByAmountfn: (state, action) => {
            state.amount += Number(action.payload)
        }  
    },
    extraReducers:(builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.amount = action.payload;
            state.pending = false;
        }).addCase(fetchUserById.pending, (state, action) => {
            state.pending = true;
        }).addCase(fetchUserById.rejected, (state, action) => {
            state.error = action.error;
        })
    }
})


export const {incrementfn, decrementfn, incrementByAmountfn} = accountSlice.actions;

export default accountSlice.reducer;