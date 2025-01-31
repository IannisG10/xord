import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi2";

const SearchBar: React.FC = () => {
    return(
        <div className="w-full  p-2 bg-gray-100 flex gap-1 items-center md:justify-end justify-start">
                <div className="relative w-fit md:text-base text-sm">
                    <input type="text" className="border border-gray-200 rounded-md outline-none p-1 
                    focus:border-black" placeholder="Rechercher..." />
                    <div className="text-2xl absolute top-1 right-1">
                        <HiMagnifyingGlass/>
                    </div>
                </div>
                <div className="md:text-2xl text-base bg-[#8fdc97] p-1 rounded-sm hover:bg-gray-200 cursor-pointer">
                    <HiPlus/>
                </div>
        </div>
    )
}
export default SearchBar;