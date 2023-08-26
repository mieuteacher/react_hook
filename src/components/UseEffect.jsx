import React, {useEffect, useState}  from 'react'

export default function UseEffect() {
    const [load, setLoad] = useState(false);
    const [load2, setLoad2] = useState(false);
    /* Cách 1 => mới vào render 1 lần sau return, sau đó nếu COM re render thì chạy lại! */
    // useEffect(() => {
    //     document.getElementById("circle").style.backgroundColor = "green"
    //     console.log("render")
    // })

    /* Cách 2 => mới vào render 1 lần sau return */
    // useEffect(() => {
    //     document.getElementById("circle").style.backgroundColor = "green"
    //     console.log("render")
    // }, [])

    /* Cách 3 => mới vào render 1 lần sau return, sau đó nếu các biến trong dependencies array thay đổi thì
    nó chạy lại */
    useEffect(() => {
        document.getElementById("circle").style.backgroundColor = "green"
        console.log("render")
    }, [load2])

  return (
    <div>
        <h1>UseEffect</h1>
        <div id='circle' style={{width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'red'}}></div>
        <button onClick={() => {
            setLoad(!load)
        }}>Load</button>
            <br></br>
        <button onClick={() => {
            setLoad2(!load2)
        }}>Load 2</button>
    </div>
  )
}
