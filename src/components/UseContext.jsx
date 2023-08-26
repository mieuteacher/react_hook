import React, {createContext} from 'react'
import ComA from './ComA'
import ComB from './ComB';
/*
- Bước 1: tạo ra context và bao bọc tất cả component muốn truyền dữ liệu!
*/
export const ParentContext = createContext();

export default function UseContext() {
  return (
    <>
        <ParentContext.Provider value={{number: 1000}}>
            <div>
                <h1>UseContext</h1>
                <ComA count={100}/>
            </div>
            <ComB></ComB>
        </ParentContext.Provider>
        
    </>
  )
}
