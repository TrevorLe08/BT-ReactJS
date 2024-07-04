import React from 'react'
import useIncrement from '../hook/useIncrement'

export default function Counter1() {
    let [count,setCount] = useIncrement(2)
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount()}>Add 2</button>
    </div>
  )
}