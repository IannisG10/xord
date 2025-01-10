import React from "react";
import { HiHome,HiMiniClipboard,HiUsers,HiTag } from "react-icons/hi2";
import { NavLink } from "react-router";



const SideBar: React.FC = ()=> {
    return(
        <div className=" md:w-1/5 w-1/4 bg-[#AEFFD8] pt-4 font-chivo">
            <ul className="flex justify-center items-center flex-col gap-5 md:pl-4 pl-2 md:text-lg text-xs ">
                <NavLink to="/" className={({isActive}) => (
                    isActive ? "bg-[#8fdc97] w-full rounded-l-lg ":""
                )}>
                    <li  className="flex justify-center items-center md:gap-2 gap-1 w-full cursor-pointer"> 
                        <HiHome/> Acceuil
                    </li>
                </NavLink>
                <NavLink to="/order" className={({isActive}) => (
                    isActive ? "bg-[#8fdc97] w-full rounded-l-lg ":""
                )}>
                    <li className="flex justify-center items-center md:gap-2 gap-1 transition-all duration-200 cursor-pointer rounded-md w-full">
                        <HiMiniClipboard/> Commandes
                    </li>
                </NavLink>
                <NavLink to="/client" className={({isActive}) => (
                    isActive ? "bg-[#8fdc97] w-full rounded-l-lg ":""
                )}>
                    <li className="flex justify-center items-center md:gap-2 gap-1 transition-all duration-200 cursor-pointer rounded-md w-full">
                        <HiUsers/> Clients
                    </li>
                </NavLink>
                <NavLink to="/order" className={({isActive}) => (
                    isActive ? "bg-[#8fdc97] w-full rounded-l-lg ":""
                )}>
                    <li className="flex justify-center items-center md:gap-2 gap-1 transition-all duration-200 cursor-pointer rounded-md w-full">
                        <HiTag/> Produits
                    </li>
                </NavLink>
            </ul>
        
        </div>
    )
}

export default SideBar;