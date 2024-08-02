import {useState} from "react" 
import { useDispatch } from 'react-redux'
import { changeNav } from "../redux/NavSlice"


export default function Header() {
  const dispatch = useDispatch()

  const [active,setActive] = useState("All")
  const buttonClass = "`text-rnmGreen font-extrabold text-center align-middle bg-white h-full w-full pt-2 bg-opacity-50 hover:bg-opacity-100 hover:cursor-pointer "
  const activeButtonClass = "bg-black text-rnmYellow bg-opacity-100 hover:cursor-default"
  return (
    <div className="bg-white bg-opacity-25 sticky top-0 z-10 w-full border-b-2 grid grid-flow-col grid-cols-2 pr-2 h-12">
      <div className="grid grid-cols-3">

      <div className={active === "All" ? buttonClass + activeButtonClass : buttonClass }  onClick={() => {setActive("All"); dispatch(changeNav("All"))}}>All Characters</div>
      <div className={active === "Name" ? buttonClass + activeButtonClass : buttonClass }  onClick={() => {setActive("Name"); dispatch(changeNav("Name"))}}>Filter By Name</div>
      </div>
        
        <p className="text-blue-900 font-extrabold text-2xl justify-self-end">Github</p>
        </div>
  )
}
