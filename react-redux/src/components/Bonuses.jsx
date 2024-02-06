import React from 'react'
// import { incrementBonusFn } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { incrementBonusFn } from '../slices/bonusSlice'

const Bonuses = () => {

   const points =  useSelector((state) => state.bonus.points)

   const dispatch = useDispatch()
  return (
    <div>
      <h1>Bonus Component</h1>
      <h2>Total point: {points}</h2>
      <button style={{ height: "50px", width: "100px" }} onClick={() => dispatch(incrementBonusFn())}>Increment</button>
    </div>
  )
}

export default Bonuses