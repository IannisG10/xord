import React, { useEffect } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import ClientList from "@/components/ClientList/ClientList";
import { Button } from "@/components/ui/button";
import { HiFilter } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi2";
import { RxBorderDashed } from "react-icons/rx";

const ClientDashBoard: React.FC = () => {

    useEffect(()=>{

    },[])

    return(
        <div className="flex flex-col gap-7">
            <SearchBar/>
            <div className="bg-[#8fdc97] w-1/6 h-28 font-chivo text-xl rounded-md m-2 p-2">
                <div>
                    <HiUserGroup/> Nombre total de clients
                </div>
                <div className="m-1">
                    <RxBorderDashed/>
                </div>
            </div>
            <div className="flex justify-end mr-2">
                <Button className="w-1/12" variant="outline">
                    <HiFilter/> Filtrer
                </Button>
            </div>
            <ClientList/>
        </div>
    )
}

export default ClientDashBoard