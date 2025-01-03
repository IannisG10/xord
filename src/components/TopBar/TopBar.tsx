import React from "react";

const TopBar: React.FC = () => {
    return(
        <div className="p-2 bg-gray-100 flex justify-between font-monsterat">
            <div className="font-semibold">
                Bonjour, GUERRA!
            </div>
            <div className="rounded-full bg-[#ac8887] size-7 flex justify-center items-center font-semibold">
                GI
            </div>
        </div>
    )
}

export default TopBar;