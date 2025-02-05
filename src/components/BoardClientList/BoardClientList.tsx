import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import { HiUserGroup } from "react-icons/hi2";
import { RxBorderDashed } from "react-icons/rx";
import {useAppSelector } from "@/redux/hook/hook";
import { HiFilter } from "react-icons/hi";
import { Button } from "../ui/button";


const BoardClientList: React.FC = () => {

    const client = useAppSelector(state => state.client.client)
    const status = useAppSelector(state => state.client.status)
    return(
        <div className="flex-1 flex flex-col gap-7 min-w-0">
            <SearchBar/>
            <div className="bg-[#8fdc97] md:w-1/6 w-1/2 h-32 font-chivo md:text-xl text-base rounded-md m-2 md:p-2 p-1">
                <div>
                    <HiUserGroup/> Nombre Total de clients
                </div>
                <div className="m-1">
                    {status ? client.length : <RxBorderDashed/>}
                </div>
            </div>
            <div className="flex justify-end mr-2">
                <Button className="md:w-1/12 w-1/3" variant="outline">
                    <HiFilter/> Filtrer
                </Button>
            </div>
            
        </div>
    )
}

export default BoardClientList;