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
        <div className="grid grid-cols-10 grid-rows-6 gap-6 px-4 m-7">
            <div className="col-span-2 row-span-2 p-2 bg-[#aeffd8] rounded-md h-32 text-xl font-chivo">
                <HiMiniCube/> <div>Nombre Total de commandes</div>
            </div>
            <div className="col-span-2 row-span-2 col-start-3 p-2 bg-[#8affc1] text-xl font-chivo rounded-md">
                <HiBanknotes/> <div>Chiffre d'affaire Total</div>
            </div>
            <div className="col-span-2 row-span-2 col-start-5 p-2  bg-[#8fdc97] text-xl font-chivo rounded-md">
                <HiUserGroup/> <div>Nombre Total de Clients</div>
                {status ? client.length : <RxBorderDashed/>}
            </div>
            <div className="col-span-2 row-span-2 col-start-7 p-2 bg-[#8bba91] text-xl font-chivo rounded-md">
                <HiClock/> Commande en attente
            </div>
            <div className="col-span-4 row-span-2 row-start-3 p-2 bg-[#00a896] text-xl font-chivo rounded-md">
                <HiArchiveBox/> Commandes récentes
            </div>
            <div className="col-span-4 row-span-2 col-start-1 row-start-5 p-2 bg-[#9bb1ff] font-chivo text-xl rounded-md">
                <HiTrophy/> Top Clients
            </div>
            <div className="col-span-4 row-span-4 col-start-5 row-start-3 p-2 bg-[#da969f] text-xl font-chivo rounded-md">
                Graphique
            </div>
            <div className="col-span-2 cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out row-span-2 col-start-9 row-start-3 p-2 bg-[#FFBF66] text-xl font-chivo rounded-md">
                <Link to="/newClient" className="h-full">
                    <HiMiniPlus/> Ajouter un Client
                </Link>
            </div>
            <div className="col-span-2 row-span-2 col-start-9 row-start-5 p-2 bg-[#C49FFF] text-xl font-chivo rounded-md">
                <HiSquaresPlus/> Ajouter une nouvelle commande
            </div>
        </div>
    )
}

export default DashBoard
