import React, {memo} from 'react'

const MemoTest = ({handleIncrement}) => {
    console.log("đã rerender MemoTest")
  return (
    <div>
        <h1>Memo Test</h1>
        <div>
            <button onClick={handleIncrement}>Tăng</button>
        </div>
    </div>
  )
}

export default memo(MemoTest)