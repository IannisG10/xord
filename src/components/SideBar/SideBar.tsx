import React from "react";
import { HiHome,HiMiniClipboard,HiUsers,HiTag } from "react-icons/hi2";
import { NavLink } from "react-router";



const SideBar: React.FC = ()=> {
    return(
        <div className="h-full w-1/5 bg-[#AEFFD8] pt-4 font-chivo">
            <ul className="flex justify-center items-center flex-col gap-5 pl-4 text-lg ">
                <NavLink to="/" className={({isActive}) => (
                    isActive ? "bg-[#8fdc97] w-full rounded-l-lg ":""
                )}>
                    <li  className="flex justify-center items-center gap-2 w-full cursor-pointer"> 
                        <HiHome/> Acceuil
                    </li>
                </NavLink>
                <NavLink to="/order" className={({isActive}) => (
                    isActive ? "bg-[#8fdc97] w-full rounded-l-lg ":""
                )}>
                    <li className="flex justify-center items-center gap-2 transition-all duration-200 cursor-pointer rounded-md w-full">
                        <HiMiniClipboard/> Commandes
                    </li>
                </NavLink>
                <NavLink to="/client" className={({isActive}) => (
                    isActive ? "bg-[#8fdc97] w-full rounded-l-lg ":""
                )}>
                    <li className="flex justify-center items-center gap-2 transition-all duration-200 cursor-pointer rounded-md w-full">
                        <HiUsers/> Clients
                    </li>
                </NavLink>
                <NavLink to="/order" className={({isActive}) => (
                    isActive ? "bg-[#8fdc97] w-full rounded-l-lg ":""
                )}>
                    <li className="flex justify-center items-center gap-2 transition-all duration-200 cursor-pointer rounded-md w-full">
                        <HiTag/> Produits
                    </li>
                </NavLink>
            </ul>
        
        </div>
    )
}

export default SideBar;