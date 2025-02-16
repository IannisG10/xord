import React from "react";
import TopBar from "../TopBar/TopBar";
import { Package,Wallet,Activity } from "lucide-react";


const Inventory: React.FC = ()=>{
    return(
        <div className=" relative w-full flex flex-col">
            <TopBar withSearchBar={false}/>
            <h1 className="mt-14 mx-5 font-bold font-monsterat text-2xl">Inventaire des Produits</h1>
            <div className=" grid  grid-cols-6 grid-rows-2 h-1/2 w-11/12 gap-4 my-8 mx-5 font-chivo">
                <div className=" flex items-center col-span-2 row-span-2 p-3 hover:shadow-none transition duration-200 ease-in-out gap-2 shadow rounded border-2 border-gray-100">
                    <div className="p-2 rounded-full bg-blue-100 ">
                        <Package color="blue"/>
                    </div>
                    <div className=" flex flex-col justify-start">
                        <p className="text-lg text-gray-500">Total de produits</p>
                        <span className="text-xl font-bold font-monsterat">44</span>
                    </div>
                </div>
                <div className=" flex items-center col-span-2 row-span-2 p-3 gap-2 hover:shadow-none transition duration-200 ease-in-out shadow rounded border-2 border-gray-100">
                    <div className="p-2 rounded-full bg-green-100 ">
                        <Wallet color="green"/>
                    </div>
                    <div className=" flex flex-col justify-start">
                        <p className="text-lg text-gray-500">Prix du stock</p>
                        <span className="text-xl font-bold font-monsterat">2350€</span>
                    </div>
                </div>
                <div className=" flex items-center col-span-2 row-span-2 p-3 hover:shadow-none transition duration-200 ease-in-out gap-2 shadow rounded border-2 border-gray-100">
                    <div className="p-2 rounded-full bg-orange-100 ">
                        <Activity color="orange"/>
                    </div>
                    <div className=" flex flex-col justify-start">
                        <p className="text-lg text-gray-500">Prix moyen du stock</p>
                        <span className="text-xl font-bold font-monsterat">53.44€</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Inventory