import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByRewardFn, incrementRewardFn } from '../reducers/reward'

const Rewards = () => {
    const points =  useSelector((state) => state.reward.points)

    const dispatch = useDispatch()
  return (
    <div>
    <h1>Reward Component</h1>
    <h2>Total point: {points}</h2>
    <button style={{ height: "50px", width: "100px" }} onClick={() => dispatch(incrementRewardFn())}>Increment</button>
    <button style={{ height: "50px", width: "100px" }} onClick={() => dispatch(incrementByRewardFn(10))}>Increment by 10</button>
  </div>
  )
}

export default Rewards