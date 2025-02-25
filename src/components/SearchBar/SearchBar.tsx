import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";


const SearchBar: React.FC = () => {
    return(
        <div className="md:w-1/3 w-1/2  font-monsterat ">
                <div className="w-full md:text-base text-sm relative">
                    <input type="text" className=" w-full border-2 border-gray-200 md:text-lg text-base rounded-md outline-none p-1 pl-7  
                    " placeholder="Rechercher..." />
                    <div className="text-2xl absolute  top-2 left-1">
                        <HiMagnifyingGlass size={23}/>
                    </div>
                </div>
        </div>
    )
}
export default SearchBar;