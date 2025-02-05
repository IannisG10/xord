import React  from "react";
import { useAppSelector } from "@/redux/hook/hook";

import { NavLink } from "react-router";
import { LayoutDashboard,Settings,User,Package,LogOut,Clipboard } from "lucide-react";


const SideBar: React.FC = ()=> {

    const open = useAppSelector(state => state.open.open)
    
    return(
        <div className="h-full relative">
            
            <aside className={`h-full flex justify-center fixed bg-gray-300 z-30  w-56 ${open ? "translate-x-0":"-translate-x-full"} transition-transform ease-in-out duration-600`}>
                <nav className=" flex flex-col justify-between w-full  ">
                    <ul className="flex flex-col gap-5 text-sm mt-16 p-2 font-semibold font-monsterat">
                        <NavLink to='/'
                                className={({isActive})=>(
                                    `flex items-center p-1 rounded  ${isActive ? "bg-gray-600 text-white":"hover:bg-gray-600 hover:text-white" } `
                                ) }
                        >
                            <LayoutDashboard size={21}/> Dashboard
                        </NavLink>
                        <NavLink to='/client'
                                className={({isActive})=>(
                                    `flex items-center p-1 rounded transition duration-100 ease-linear ${isActive ? "bg-gray-600 text-white":"hover:bg-gray-600 hover:text-white" } `
                                )}
                        >
                            <User size={21}/> Clients
                        </NavLink>
                        <NavLink to='/produit'
                                className={({isActive})=>(
                                    `flex items-center p-1 rounded transition duration-100 ease-linear ${isActive ? "bg-gray-600":"hover:bg-gray-600 hover:text-white"} `
                                )}
                        >
                            <Clipboard size={21}/> Produits
                        </NavLink>
                        <NavLink to='/commande'
                                className={({isActive})=>(
                                    `flex items-center p-1 rounded transition duration-100 ease-linear ${isActive ? "bg-gray-600":"hover:bg-gray-600 hover:text-white"} `
                                )}
                        >
                            <Package size={21}/> Commandes
                        </NavLink>
                    </ul>
                    
                    <ul className=" flex flex-col p-2 gap-3 text-sm font-semibold font-monsterat">
                        <NavLink to='/parametre'
                            className={({isActive})=>(
                                `flex items-center p-1 rounded transition duration-100 ease-linear ${isActive ? "bg-gray-600":"hover:bg-gray-600 hover:text-white"} `
                            )}
                        >
                            <Settings size={21}/>Paramètres

                        </NavLink>
                        <NavLink to='/iii' 
                                className={({isActive})=>(
                                    `flex items-center p-1 rounded transition duration-100 ease-linear ${isActive ? "bg-gray-600":"hover:bg-gray-600 hover:text-white"} `
                                )}>
                            <LogOut size={21}/>Déconnexion
                        </NavLink>
                    </ul>
                    
                </nav>
            </aside>
        </div>
    )
}

export default SideBar;