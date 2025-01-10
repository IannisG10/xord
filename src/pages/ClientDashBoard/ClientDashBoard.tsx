import React, { useEffect } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import ClientList from "@/components/ClientList/ClientList";
import { Button } from "@/components/ui/button";
import { HiFilter } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi2";
import { useAppSelector,useAppDispatch } from "@/redux/hook/hook";
import { fetchClient } from "@/redux/reducer/clientReducer";


const ClientDashBoard: React.FC = () => {

    const dispatch = useAppDispatch()

    const client = useAppSelector( state => state.client.client)

    useEffect(()=>{
        dispatch(fetchClient())
    },[])

    return(
        <div className="flex flex-col gap-7">
            <SearchBar/>
            <div className="bg-[#8fdc97] w-1/6 h-32 font-chivo text-xl rounded-md m-2 p-2">
                <div>
                    <HiUserGroup/> Nombre total de clients
                </div>
                <div className="m-1">
                    {client.length}
                </div>
            </div>
            
            <div className="flex justify-end mr-2">
                <Button className="w-1/12" variant="outline">
                    <HiFilter/> Filtrer
                </Button>
            </div>
            <ClientList/>
            <div>
                {client.map((item,index) => (
                    <p key={index}>{item.nom}</p>
                ))}
            </div>
        </div>
    )
}

export default ClientDashBoard