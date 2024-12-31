import React from "react";


const TopBar: React.FC = () => {
    return(
        <div className='flex-1 h-11 p-2 bg-gray-100'>
            <div className="flex justify-between px-2 font-monsterat">
                <div className="font-semibold">
                    Bonjour,GUERRA!
                </div>
                <div>
                    <div className="rounded-full flex justify-center items-center font-semibold bg-[#ac8887] size-7">
                        GI
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TopBar