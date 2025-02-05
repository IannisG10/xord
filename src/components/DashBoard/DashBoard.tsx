import React  from "react";
import TopBar from "../TopBar/TopBar";
import { Package,ChartNoAxesColumnIncreasing,User2,Clock1,Trophy,UserPlus2,ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
// import { Link } from "react-router";
// import { useAppSelector,useAppDispatch } from "@/redux/hook/hook";
//import { fetchClient } from "@/redux/reducer/clientReducer";

const DashBoard: React.FC = () => {

    //const dispatch = useAppDispatch()

    // const client = useAppSelector(state => state.client.client)
    // const { status } = useAppSelector(state => state.client)

    // useEffect(()=> {
    //     dispatch(fetchClient())
    // },[])


    return(
        
        <div className=" relative w-full flex flex-col">
            <TopBar/>
            <div className="grid grid-cols-4 grid-rows-15 gap-4 h-full m-3 font-chivo">
                <div className="flex items-center col-span-2 row-span-2 border-2 border-gray-100  
                shadow rounded p-3 gap-2 hover:shadow-none  transition duration-200 ">
                    <div className="bg-blue-100 flex justify-center items-center rounded-full p-1">
                        <Package color="blue"/>
                    </div>
                    <div className=" flex flex-col justify-start">
                        <p className="text-sm text-gray-500">Nombre Total de commandes</p>
                        <span className="text-xl font-bold font-monsterat">1200</span>
                    </div>
                </div>
                <div className=" flex items-center gap-2 p-3 col-span-2 col-start-3 row-span-2 border-2 hover:shadow-none 
                        transition duration-200 border-gray-100 shadow rounded">
                    <div className="bg-green-100 rounded-full p-1 flex justify-center items-center">
                        <ChartNoAxesColumnIncreasing color="green"/>
                    </div>
                    <div className=" flex flex-col justify-start">
                        <p className="text-sm text-gray-500">Chiffre d'affaire Total</p>
                        <span className="text-xl font-bold font-monsterat">45,678€</span>
                    </div>
                </div>
                <div className=" flex items-center gap-2 p-3 col-span-2 row-span-2 row-start-3 border-2 hover:shadow-none 
                  shadow border-gray-100 transition duration-200  rounded">
                    <div className="bg-purple-100 rounded-full p-1 flex justify-center items-center ">
                        <User2 color="purple"/>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Nombre Total de Clients</p>
                        <span className="text-xl font-bold font-monsterat">500</span>

                    </div>
                </div>
                <div className=" flex items-center gap-2 p-3 border-2 border-gray-100 col-span-2 col-start-3 row-span-2 row-start-3 
                hover:shadow-none shadow rounded transition duration-200">
                    <div className="bg-orange-50 rounded-full p-1 flex justify-center items-center ">
                        <Clock1 color="orange"/>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Commandes en attente</p>
                        <span className="text-xl font-bold font-monsterat">21</span>
                    </div>
                </div>
                <div className=" flex flex-col gap-2 col-span-4 p-3 row-span-3 row-start-5 border-2 border-gray-100 shadow rounded">
                    <div >
                        Graphique de vente
                    </div>
                    <div className="w-full h-36 bg-gray-200 rounded-sm">
                        
                    </div>
                </div>
                <div className=" flex flex-col gap-3 col-span-3 row-span-3 p-3 row-start-8 border-2 border-gray-100 hover:shadow-none transition duration-200 shadow rounded">
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
                <div className="col-span-4 row-span-3 row-start-11 flex flex-col p-3 gap-2 
                        border-2 hover:shadow-none transition duration-200 ease-in-out border-gray-100  shadow rounded">
                    <div className="font-semibold">Commandes récentes</div>
                    <div className=" flex flex-col gap-3">
                        <div className=" flex justify-between w-full bg-gray-300 p-2 rounded">
                            <div>Commandes #1</div>
                            <div className="text-gray-600 text-sm">il y 1h</div>
                        </div>
                        <div className="flex justify-between w-full bg-gray-300 p-2 rounded">
                            <div>Commandes #2</div>
                            <div className="text-gray-600 text-sm">il y a 3h</div>
                        </div>
                        <div className=" flex justify-between w-full bg-gray-300 p-2 rounded">
                            <div>Commandes #3</div>
                            <div className="text-gray-600 text-sm">il y a 7h</div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-span-2 row-span-2  row-start-14 border-2 border-gray-100 bg-yellow-100 shadow rounded ">
                    <NavLink to='/add-client' >
                        <div className=" flex gap-1 font-semibold h-full p-2">
                            <UserPlus2/> Ajouter un client
                        </div>
                    </NavLink>
                </div>
                <div className="col-span-2 col-start-3 row-start-14 hover:shadow-none row-span-2 border-2 border-gray-100 bg-gradient-to-r from-purple-100 to-blue-50 shadow rounded ">
                    <NavLink to='/add-order'>
                        <div className=" flex font-semibold gap-1 h-full p-2">
                            <ShoppingCart/> Ajouter une une nouvelle Commande
                        </div>
                    </NavLink>
                </div>

            </div>

        </div>
    )
}

export default DashBoard
