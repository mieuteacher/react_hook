import React, {useReducer} from 'react'

export default function UseReducer() {
    const initState = 5;

    function reducerFunction (state, action) {
        switch(action) {
            case "INCREMENT":
                return state + 1
            case "DECREMENT":
                return state - 1
            case "SETCOUNT":
                return action.number
            default: 
                return state
        }
    }

    const [state, dipatch] = useReducer(reducerFunction, initState);
  return (
    <div>
        <h1>UseReducer</h1>
        <h2>Giá trị của count: {state}</h2>
        <h2>Giá trị của name: {state}</h2>
        <button onClick={() => {
            dipatch({
                action: "INCREMENT"
            })
        }}>Tăng Count</button>
        <button onClick={() => {
            dipatch({
                payload: "DECREMENT"
            })
        }}>Giảm count</button>
        <button onClick={() => {
            dipatch({
                payload: "SETCOUNT",
                number: 100000
            })
        }}>Setcount</button>
    </div>
  )
}
