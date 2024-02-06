import React, { useState } from "react";
import {
  decrementfn,
  fetchUserById,
  incrementByAmountfn,
  incrementfn,
} from "../slices/accountSlice";
import { useDispatch, useSelector } from "react-redux";
// import { decrementfn, incrementByAmountfn, incrementfn } from '../actions'

const Accounts = () => {
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>Account Component</h1>
      <h2>Amount: ${amount}</h2>
      <button
        style={{ height: "50px", width: "100px" }}
        onClick={() => dispatch(incrementfn())}
      >
        Increment
      </button>
      <button
        style={{ height: "50px", width: "100px" }}
        onClick={() => dispatch(decrementfn())}
      >
        Decrement
      </button>
      <input
        type="text"
        placeholder="enter a value to add with"
        style={{ height: "50px", width: "400px" }}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        style={{ height: "50px", width: "100px" }}
        onClick={() => {
          dispatch(incrementByAmountfn(value));
        }}
      >
        Increment by {value}
      </button>
      <button
        style={{ height: "50px", width: "100px" }}
        onClick={() => {
          dispatch(fetchUserById(3));
        }}
      >
        fetch user amount
      </button>
    </div>
  );
};

export default Accounts;
