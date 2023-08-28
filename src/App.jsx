import UseState from "./components/UseState"
import UseEffect from "./components/UseEffect"
import UseContext from "./components/UseContext"
import Memo from './components/Memo'
import UseMemo from "./components/UseMemo"
import { useRef } from "react"
import UseReducer from "./components/UseReducer"
function App() {
  const textRef = useRef();

  const handleRef = () => {
    console.log("textRef 1", textRef)
    console.log("textRef 2", textRef.current)
    /*
      textRef.current == document.getElementById("text_tag")
    */
    textRef.current.style.color = "red";
    textRef.current.innerText = "ABCD"
  }
  return (
    <>
      <h1 ref={textRef} id="text_tag">App Nekk</h1>
      {/* <button onClick={handleRef}>Click Test Ref</button> */}
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <UseContext/> */}
      {/* <Memo/> */}
      {/* <UseMemo/> */}
      <UseReducer/>
    </>
  )
}

export default App
