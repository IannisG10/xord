import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi2";

const SearchBar: React.FC = () => {
    return(
        <div className="bg-gray-100 p-2 flex gap-1 items-center">
            <div className="relative w-fit">
                <input type="text" className="border border-gray-200 rounded-md outline-none p-1 
                focus:border-black" placeholder="Rechercher..." />
                <div className="text-2xl absolute top-1 right-1">
                    <HiMagnifyingGlass/>
                </div>
            </div>
            <div className="text-2xl bg-gray-300 p-1 rounded-sm">
                <HiPlus/>
            </div>
        </div>
    )
}
export default SearchBar;