import React, { useEffect } from "react";
import { useAppDispatch,useAppSelector } from "@/redux/hook/hook";
import { fetchClient } from "@/redux/reducer/clientReducer";
import SearchBar from "@/components/SearchBar/SearchBar";

const ClientDashBoard: React.FC = () => {

    useEffect(()=>{

    },[])

    return(
        <div>
            <SearchBar/>
        </div>
    )
}

export default ClientDashBoard