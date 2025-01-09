import React, { useEffect } from "react";
import { useAppDispatch,useAppSelector } from "@/redux/hook/hook";
import { fetchClient } from "@/redux/reducer/clientReducer";
import SearchBar from "@/components/SearchBar/SearchBar";
import ClientList from "@/components/ClientList/ClientList";

const ClientDashBoard: React.FC = () => {

    useEffect(()=>{

    },[])

    return(
        <div className="flex flex-col gap-10">
            <SearchBar/>
            <ClientList/>
        </div>
    )
}

export default ClientDashBoard