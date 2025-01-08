import React from "react";
import Client from "@/components/Client/Client";
import { HiHome } from "react-icons/hi2";
import { Link } from "react-router";

const ClientForm: React.FC = () => {
    return(
        <div className="flex justify-center items-center relative">
            <div className="flex justify-center items-center absolute left-2 top-1 p-1 text-xl cursor-pointer 
            rounded-md bg-[#8fdc97] hover:scale-95 transition-all duration-200 ease-in-out">
                <Link to="/">
                    <HiHome/>
                </Link>
            </div>
            <Client/>
        </div>
    )
}

export default ClientForm