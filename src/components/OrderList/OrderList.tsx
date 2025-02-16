import React from "react";
import TopBar from "../TopBar/TopBar";

const OrderList: React.FC = () => {
    return(
        <div className=" relative w-full flex flex-col">
            <TopBar withSearchBar={false}/>
            <h1 className="mt-14 mx-5 font-bold font-monsterat text-2xl">Liste des commandes</h1>
            <div className=" grid grid-cols-8 grid-rows-2 gap-4 my-8 mx-5 font-chivo ">
                <div className=" flex items-center border-2 border-gray-100 
                    col-span-2 row-span-2 p-3 rounded">

                </div>
                <div className=" flex items-center border-2 border-gray-100 
                    col-span-2 row-span-2 p-3 rounded">

                </div>
                <div className=" flex items-center border-2 border-gray-100 
                    col-span-2 row-span-2 p-3 rounded">

                </div>
                <div className=" flex items-center border-2 border-gray-100 
                    col-span-2 row-span-2 p-3 rounded"></div>
            </div>   
        </div>
    )
}

export default OrderList

