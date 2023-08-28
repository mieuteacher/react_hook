import React, { useState, useMemo } from 'react'
const numbers = [1,2,3,4,5,6,7,8,9,10]
export default function UseMemo() {
    const [count, setCount] = useState(0);

    let total = useMemo(() => {
        return numbers.reduce((result, cur) => {
            console.log("đã vào reducer")
            return result + cur
        }, 0) + count
    }, [count])

    // let total = numbers.reduce((result, cur) => {
    //     console.log("đã vào reducer")
    //     return result + cur
    // }, 0) + count

    console.log("total", total)
  return (
    <div>
        <h1>UseMemo {count}</h1>
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>Tăng</button>
        </div>
    </div>
  )
}
