import React from 'react'
import ComB from './ComB'
export default function ComA({count}) {
  return (
    <div>
        <h1>ComA giá trị nhận từ cha: {count}</h1>
        {/* <ComB count={count}/> */}
    </div>
  )
}
