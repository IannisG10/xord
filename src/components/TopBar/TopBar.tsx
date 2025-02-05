import React from "react";
import MenuHamburger from "../Menu/MenuHamburger";

const TopBar: React.FC = () => {
    return(
        <div className="  w-full bg-gray-100 flex justify-between items-center font-monsterat">
            <div className="font-semibold md:text-base text-sm">
                <MenuHamburger/>
            </div>
            <div className="rounded-full bg-[#ac8887] md:size-7 p-2 mx-1 size-6 md:text-base text-sm flex 
                justify-center items-center font-semibold">
                GI
            </div>
        </div>
    )
}

export default TopBar;