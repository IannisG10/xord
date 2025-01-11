import React, { useEffect } from "react";
import { HiUserGroup } from "react-icons/hi"
import { HiMiniCube,
        HiBanknotes,
        HiClock,
        HiArchiveBox
        ,HiTrophy,HiMiniPlus,
        HiSquaresPlus } 
    from "react-icons/hi2";
import { RxBorderDashed } from "react-icons/rx";
import { Link } from "react-router";
import { useAppSelector,useAppDispatch } from "@/redux/hook/hook";
import { fetchClient } from "@/redux/reducer/clientReducer";

const DashBoard: React.FC = () => {

    const dispatch = useAppDispatch()

    const client = useAppSelector(state => state.client.client)
    const { status } = useAppSelector(state => state.client)

    useEffect(()=> {
        dispatch(fetchClient())
    },[])


    return(
        <div className="grid md:grid-cols-10 md:grid-rows-6 grid-cols-4 grid-rows-8 gap-6 px-4 m-7">
            <div className="col-span-2 row-span-2 p-1 bg-[#aeffd8] rounded-md md:text-xl text-xs font-chivo">
                <HiMiniCube/> <div>Nombre Total de commandes</div>
            </div>
            <div className="col-span-2 row-span-2 col-start-3 p-1 bg-[#8affc1] md:text-xl text-xs font-chivo rounded-md">
                <HiBanknotes/> <div>Chiffre d'affaire Total</div>
            </div>
            <div className="col-span-2 row-span-2 md:col-start-5 col-start-1 md:row-start-1 row-start-3 p-1  bg-[#8fdc97] md:text-xl text-xs font-chivo rounded-md">
                <HiUserGroup/> <div>Nombre Total de Clients</div>
                {status ? client.length : <RxBorderDashed/>}
            </div>
            <div className="col-span-2 row-span-2 md:col-start-7 col-start-3 md:row-start-1 row-start-3 p-1 bg-[#8bba91] md:text-xl text-xs font-chivo rounded-md">
                <HiClock/> Commande en attente
            </div>
            <div className="md:col-span-4 col-span-2 row-span-2 md:row-start-3 row-start-5 col-start-1 p-1 bg-[#00a896] md:text-xl text-xs font-chivo rounded-md">
                <HiArchiveBox/> Commandes récentes
            </div>
            <div className="md:col-span-4 col-span-2 row-span-2 col-start-1 row-start-6 md:row-start-5 p-1 bg-[#9bb1ff] font-chivo md:text-xl text-xs rounded-md">
                <HiTrophy/> Top Clients
            </div>
            <div className="md:col-span-4 col-span-2 md:row-span-4 row-span-2 md:col-start-5 col-start-3 md:row-start-3 row-start-5 p-1 bg-[#da969f] md:text-xl text-xs font-chivo rounded-md">
                Graphique
            </div>
            <div className="col-span-2 row-span-2 md:col-start-9 col-start-2 md:row-start-3 row-start-7 cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out p-1 bg-[#FFBF66] md:text-xl text-xs font-chivo rounded-md">
                <Link to="/newClient" className="h-full">
                    <HiMiniPlus/> Ajouter un Client
                </Link>
            </div>
            <div className="col-span-2 row-span-2 md:col-start-9 col-start-3 row-start-7 md:row-start-5 p-1 bg-[#C49FFF] md:text-xl text-xs font-chivo rounded-md">
                <HiSquaresPlus/> Ajouter une nouvelle commande
            </div>
        </div>
    )
}

export default DashBoard
