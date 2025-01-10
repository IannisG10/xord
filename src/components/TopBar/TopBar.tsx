import React from "react";

const TopBar: React.FC = () => {
    return(
        <div className="p-2  w-full bg-gray-100 flex justify-between font-monsterat">
            <div className="font-semibold md:text-base text-sm">
                Bonjour, GUERRA!
            </div>
            <div className="rounded-full bg-[#ac8887] md:size-7 p-2 mx-1 size-5 md:text-base flex 
                justify-center items-center font-semibold">
                GI
            </div>
        </div>
    )
}

export default TopBar;