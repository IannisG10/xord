import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";


const SearchBar: React.FC = () => {
    return(
        <div className="w-full flex font-monsterat gap-1 items-center justify-start">
                <div className=" w-fit md:text-base text-sm relative">
                    <input type="text" className="border-2 border-gray-200 text-lg rounded-md outline-none p-1 pl-7  
                    " placeholder="Rechercher..." />
                    <div className="text-2xl absolute  top-2 left-1">
                        <HiMagnifyingGlass size={23}/>
                    </div>
                </div>
        </div>
    )
}
export default SearchBar;