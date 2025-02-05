import React from "react"
import SideBar from "@/components/SideBar/SideBar"
import DashBoard from "@/components/DashBoard/DashBoard"
import { useAppSelector,useAppDispatch } from "@/redux/hook/hook"
import { openMenu } from "@/redux/reducer/openReducer"

const Acceuil: React.FC = ()=> {
    const open = useAppSelector(state => state.open.open)
    const dispatch = useAppDispatch()
    return(
        <div className="flex h-screen relative">
            
            <SideBar/>
            {open && 
                <div className=" fixed z-10 inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm 
                transition-opacitya duration-300"
                    onClick={()=>{dispatch(openMenu())}}
                ></div>
            }
            <DashBoard/>
        </div>
    )
}

export default Acceuil