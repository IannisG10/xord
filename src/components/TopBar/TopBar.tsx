import React from "react";
import MenuHamburger from "../Menu/MenuHamburger";
import { Search,LogIn } from "lucide-react";
import { Link } from "react-router";


interface PropsTopBar{
    withSearchBar: boolean
}

const TopBar: React.FC<PropsTopBar> = ({withSearchBar}) => {
    return(
        <div className=" fixed top-0  w-full bg-gray-100 flex justify-between items-center font-monsterat">
            <div className="font-semibold md:text-base text-sm">
                <MenuHamburger/>
            </div>
            {
                withSearchBar &&
                <div className="relative">
                    <input type="text" className="outline-none border-2 border-gray-300 rounded-md 
                        focus:border focus:border-black p-0.5 text-base" placeholder="Rechercher..." />
                        <Search size={23} className="absolute top-1 right-0 p-1"/>
                </div>
            }
            <div className=" flex items-center gap-1 ">
                <Link to='/signup'>
                    <div className="p-1 hover:bg-gray-200 rounded duration-150 transition ease-in-out cursor-pointer">
                        <LogIn size={20} />
                    </div>
                </Link>
                <div className="rounded-full bg-[#ac8887] md:size-7 p-2 mx-1 size-6 md:text-base text-sm flex 
                    justify-center items-center font-semibold">
                    GI
                </div>

            </div>
            
        </div>
    )
}

export default TopBar;