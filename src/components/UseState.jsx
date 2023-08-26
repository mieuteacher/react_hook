import React, {useState} from 'react'
/*
- UseState là 1 function 
- Nhận vào params duy nhất là giá trị khởi tạo. (number, string, array, object, function)
- Trả về: 1 array có 2 phần tử (1 - 1 biến trỏ tới giá trị khởi tạo, 2 - 1 function để 
set giá trị cho biến đó)
*/
export default function UseState() {
    // const data = useState(1);
    /* Destructuring ES6 */
    const [count, setCount] = useState(0) // [count, setCount()];

    // console.log("doi thu 1",data[0], count)
    console.log("doi thu 2", setCount)
  return (
    <div>UseState
        <div>Giá trị của count: {count}</div>
        {/* <button onClick={() => {
            data[1](100)
        }}>Set Với Data1</button> */}
        <br></br>
        <button onClick={() => {
            setCount(count  => count + 1) //setCount(1+ 1)
            setCount(count  => count + 1) //setCount(1+ 1)
            setCount(count  => count + 1) //setCount(1+ 1)
        }}>Tăng</button>
    </div>
  )
}
