import React, { useState, useCallback} from 'react'
import MemoTest from './MemoTest'
export default function Memo() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0); 
    console.log("đã rerender component memo")

    const handleIncrement = useCallback(() => {
        console.log("đã vào function handleIncrement!")
        setCount(count + 1)
    }, [count])

    const handleIncrement2= () => {
        console.log("đã vào function handleIncrement 2!")
        setCount2(count2 + 1)
    }
  return (
    <div>
        <h1>Memo Count {count}  Count 2: {count2}</h1>
        <MemoTest handleIncrement={handleIncrement}/>
        <div>
            <button onClick={handleIncrement2}>Tăng 2</button>
        </div>
    </div>
  )
}
