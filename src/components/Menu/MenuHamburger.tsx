import React from "react";

import { Menu,X } from "lucide-react";
import { useAppSelector,useAppDispatch } from "@/redux/hook/hook";
import { openMenu } from "@/redux/reducer/openReducer";


const MenuHamburger: React.FC = () => {

    const open = useAppSelector(state => state.open.open)
    const dispatch = useAppDispatch()
    
    return(
        <>
            <div className={`flex justify-center items-center p-1 cursor-pointer 
                m-2 size-8 rounded-sm border-2 border-gray-300  top-0 left-1 z-40 ${open ? "bg-none border-none translate-x-44":"bg-gray-200 translate-x-0"} transition-transform ease-in-out duration-500`}
                onClick={()=>{dispatch(openMenu())}}
            >
                   {open ? <X/> : <Menu/>}
            </div>
        </>
    )
}

export default MenuHamburger;