import React from "react";
import { Trophy } from "lucide-react";
import { User2 } from "lucide-react";

const TopClient: React.FC = () =>{
    return(
        <div className=" flex items-center w-3/4 gap-4 mb-3 justify-center">
            <div className=" flex flex-col w-full gap-3  h-full font-chivo p-3 cursor-pointer  border-gray-100 border-2  hover:shadow-none transition duration-200 shadow rounded">
                <div className="flex items-center gap-1">
                    <Trophy color="#b2bd1ed0"/> 
                    <p className="text-sm text-gray-500">Top Clients</p>

                </div>
                <div>
                    <ul className="flex flex-col gap-2">
                            <li className="flex items-center justify-between">
                                <div className="flex items-center gap-1" >
                                    <div className="size-6 bg-gray-200 rounded-full"></div>
                                    <span>Client 1</span>
                                </div>
                                <div></div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center gap-1" >
                                    <div className="size-6 bg-gray-200 rounded-full"></div>
                                    <span>Client 2</span>
                                </div>
                                <div></div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center gap-1" >
                                    <div className="size-6 bg-gray-200 rounded-full"></div>
                                    <span>Client 3</span>
                                </div>
                                <div></div>
                            </li>
                    </ul>
                </div>
            </div>
            <div className=" flex items-center cursor-pointer justify-start gap-2 border-2 border-gray-100 rounded h-full p-3 duration-200 shadow hover:shadow-none">
                <div className=" bg-purple-100 rounded-full flex justify-center items-center p-1 ">
                    <User2 color="purple"/>
                </div>
                <div className=" flex flex-col ">
                    <p className="text-sm text-gray-500 font-chivo">Nombre Total de clients</p>
                    <span className="text-xl font-bold font-monsterat">500</span>
                </div>
            </div>
        </div>
    )
}

export default TopClient