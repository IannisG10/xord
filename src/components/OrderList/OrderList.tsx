import React from "react";
import TopBar from "../TopBar/TopBar";
import { ReceiptTextIcon,PackageCheck } from "lucide-react";
import { Layers,DollarSign } from "lucide-react";

const OrderList: React.FC = () => {
    return(
        <div className=" relative w-full flex flex-col">
            <TopBar withSearchBar={false}/>
            <h1 className="md:mt-14 mt-56 mx-5 font-bold font-monsterat text-2xl">Liste des commandes</h1>
            <div className=" grid grid-cols-8 grid-rows-2 md:gap-4 gap-2 my-8 mx-5 font-chivo w-11/12 ">
                <div className=" flex md:flex-row flex-col items-center border-2 border-gray-100 
                    col-span-2 row-span-2 md:p-3 p-1 rounded  gap-3 shadow">
                        <div className="bg-blue-50 p-2 rounded-full">
                            <ReceiptTextIcon color="blue"/>
                        </div>
                        <div>
                            <p className=" md:text-lg text-base text-gray-500">Total de commandes</p>
                            <span className=" md:text-xl text-lg font-bold font-monsterat" > 56</span>
                        </div>
                </div>
                <div className=" flex md:flex-row flex-col items-center border-2 border-gray-100 shadow
                    col-span-2 row-span-2 p-3 rounded  gap-3">
                        <div className=" bg-orange-50 p-2 rounded-full">
                            <Layers color='orange'/>
                        </div>
                        <div>
                            <p className=" md:text-lg text-base text-gray-500">Commandes en attente</p>
                            <span className=" md:text-xl text-lg font-bold font-monsterat">54</span>
                        </div>
                </div>
                <div className=" flex md:flex-row flex-col items-center border-2 border-gray-100 
                    col-span-2 row-span-2 p-3 rounded  gap-3 shadow">
                        <div className="bg-gray-200 p-2 rounded-full">
                            <PackageCheck/>
                        </div>
                        <div>
                            <p className=" md:text-lg text-base text-gray-500">Commandes accomplie</p>
                            <span className=" md:text-xl text-lg font-bold font-monsterat">43</span>
                        </div>
                </div>
                <div className=" flex md:flex-row flex-col items-center border-2 border-gray-100 
                    col-span-2 row-span-2 p-3 rounded gap-3 shadow">
                        <div className="bg-green-100 p-2 rounded-full">
                            <DollarSign color="green"/>
                        </div>
                        <div>
                            <p className=" md:text-lg text-base text-gray-500">Chiffres d'affaires Total</p>
                            <span className=" md:text-xl text-lg font-bold font-monsterat">3456</span>
                        </div>
                </div>
            </div>   
        </div>
    )
}

export default OrderList

