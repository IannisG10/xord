import React from "react";
import { HiUserGroup } from "react-icons/hi"
import { HiMiniCube,HiBanknotes,HiClock,HiArchiveBox,HiArrowTrendingUp,HiTrophy,HiMiniPlus,HiSquaresPlus } from "react-icons/hi2"

const DashBoard: React.FC = ()=> {
    return(
       
            <div className="grid grid-cols-[2fr_2fr_2fr_2fr_1.5fr] grid-rows-[1fr_1fr_1fr_1fr] gap-x-5 gap-y-5 m-5 font-chivo">
                <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-[#aeffd8] p-3 gap-3 rounded-md text-xl">
                    <div>
                        <HiMiniCube/> <span>Nombre Total de commandes</span>
                    </div>
                    <span className="font-bold font-monsterat flex flex-row items-center gap-2">75 
                        <p className="font-normal text-xs text-gray-700">commandes traitées</p>
                    </span>
                </div>
                <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-[#8affc1] p-3 rounded-md text-xl">
                    <div>
                        <HiBanknotes/> <span>Chiffre d'affaire Total obtenue</span>
                    </div>
                    <span className="font-bold text-lg font-monsterat flex flex-row items-center gap-1">
                        <div className="flex justify-center items-center  gap-0.5">
                            4.221.000 <p>MGA</p>
                        </div>
                        <p className="font-normal text-xs text-gray-700">générés</p>
                    </span>
                </div>
                <div className="col-start-3 col-end-4 row-start-1 row-end-2 bg-[#8fdc97] p-3 rounded-md text-xl">
                   <div>
                        <HiUserGroup/> <span>Nombre Total de clients</span>
                   </div>
                   <span  className="font-bold font-monsterat flex flex-row items-center gap-2">
                        125
                        <p className="font-normal text-xs text-gray-700">Clients enregistrés</p>
                   </span>
                </div>
                <div className="col-start-4 col-end-5 row-start-1 row-end-2 bg-[#8bba91] p-3 rounded-md text-xl">
                    <div>
                        <HiClock/> <span>Commandes en attente de livraison</span>
                    </div>
                    <span className="font-bold font-monsterat flex flex-row items-center gap-2">
                        8
                        <p className="font-normal text-xs text-gray-700">Livraison prévue</p>
                    </span>
                </div>
                <div className="col-start-1 col-end-3 row-start-2 row-end-3 bg-[#00a896] p-3 rounded-md text-2xl">
                    <div>
                       <HiArchiveBox/> Commande récentes
                    </div>
                    <span className="font-bold font-monsterat flex justify-between items-center">
                       <div className="flex gap-2 text-3xl items-center">
                            5 
                            <p className="font-normal text-xs text-gray-900">Commandes traitées aujourd'hui</p>
                       </div>
                       <div className="flex items-center text-sm font-medium text-green-800 bg-green-300 p-1 rounded-xl">
                            <HiArrowTrendingUp/> 18%
                       </div>
                    </span>
                </div>
                <div className="col-start-1 col-end-3 row-start-3 row-end-4 bg-[#9bb1ff] p-3 rounded-md text-2xl">
                    <div>
                       <HiTrophy/> Top Clients
                    </div>
                    <span className="text-base font-monsterat font-semibold">
                        <ul className="mx-3 gap-2">
                            <li className="flex gap-1 items-center">Steve Dylan 
                                <p className="font-normal text-xs text-green-500 bg-green-200 px-1 rounded-lg">150.000MGA dépensés</p>
                            </li>
                            <li className="flex gap-1 items-center">Yannis ANDRIAJATOVO
                                <p className="font-medium text-xs text-orange-500 bg-orange-200 px-1 rounded-lg">112.000MGA dépensés</p>
                            </li>
                            <li className="flex gap-1 items-center">Luca
                                <p className=" text-xs text-yellow-600 bg-yellow-200 px-1 font-medium rounded-lg">100.000MGA dépensés</p>
                            </li>
                        </ul>
                    </span>
                </div>
                <div className="col-start-3 col-end-5 row-start-2 row-end-4 bg-[#da969f] p-3 rounded-md">Graphiques</div>
                <div className="col-start-5 col-end-6 row-start-1 cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out row-end-2 bg-[#FFBF66] rounded-md p-3 text-xl">
                    <div>
                        <HiMiniPlus/> <span>Ajouter un Client</span>
                    </div>
                    <span className="font-normal font-monsterat text-xs text-gray-700">10 Nouveaux clients ajoutées cette semaine</span>
                </div>
                <div className="col-start-5 col-end-6 row-start-2 cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out row-end-3 bg-[#C49FFF] rounded-md p-3 text-xl">
                    <div>
                        <HiSquaresPlus/> <span>Ajouter une nouvelle commande</span>
                    </div>
                    <span className="font-normal font-monsterat text-xs text-gray-700">Associez à un nouveau client ou à un client existant</span>
                </div>
            </div>
        
    )
}

export default DashBoard