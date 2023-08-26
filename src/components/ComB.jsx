import React, {useContext} from 'react'
import {ParentContext} from './UseContext';

export default function ComB({count}) {
    const data = useContext(ParentContext);
    console.log("data bên COmB", data)
  return (
    <div>ComB giá trị nhận từ cha: {count} {data.number}</div>
  )
}
