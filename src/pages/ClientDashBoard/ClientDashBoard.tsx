import React, { useEffect } from "react";
import SideBar from "@/components/SideBar/SideBar";
import { useAppDispatch } from "@/redux/hook/hook";
import { fetchClient } from "@/redux/reducer/clientReducer";
import BoardClientList from "@/components/BoardClientList/BoardClientList";


const ClientDashBoard: React.FC = () => {

    const dispatch = useAppDispatch()

    // Recupere les clients au premiers chargement de la page
    useEffect(()=>{
        dispatch(fetchClient())
    },[])

    return(
        <div className="h-screen max-w-full w-full flex">
            <SideBar/>
            <BoardClientList/>
            
        </div>
    )
}

export default ClientDashBoard