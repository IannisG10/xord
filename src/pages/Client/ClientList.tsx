import React from "react";
import TopBar from "@/components/TopBar/TopBar";
import SideBar from "@/components/SideBar/SideBar";
import { useAppDispatch,useAppSelector } from "@/redux/hook/hook";
import { openMenu } from "@/redux/reducer/openReducer";
import ClientTable from "@/components/ClientTable/ClientTable";

const ClientList: React.FC =() =>{

    const dispatch = useAppDispatch()

    const open = useAppSelector(state => state.open.open)
    return(
        <div className=" relative">
            <SideBar/>
            {open && 
                <div className=" fixed z-10 inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm 
                transition-opacitya duration-300"
                    onClick={()=>{dispatch(openMenu())}}
                ></div>
            }
            <TopBar withSearchBar={true}/>
            <ClientTable/>
        </div>
    )
}

export default ClientList