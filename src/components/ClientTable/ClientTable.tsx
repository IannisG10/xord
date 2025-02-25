import React, { useState } from "react";
import { Table,TableBody,TableCell,TableHeader,TableHead,TableRow } from "../ui/table";
import { PenIcon,Trash2,UserPlus,FilterIcon  } from "lucide-react";
import { Link } from "react-router";
import TopBar from "../TopBar/TopBar";
import { ClientData } from "@/data/ClientData";
import { ChevronRight,ChevronLeft } from "lucide-react";
import { ClientType } from "@/types/ClientType";


const ClientTable: React.FC = () => {

    const [currentPage,setCurrentPage] = useState<number>(1)
    const itemPerPage:number = 5

    const pageNumber: number = Math.ceil(ClientData.length / itemPerPage)
    const LastClientIndex = currentPage * itemPerPage;
    const FirstClientIndex = LastClientIndex - itemPerPage

    const currentClient: ClientType[] = ClientData.slice(FirstClientIndex,LastClientIndex)

    return(
        <div className="relative w-full flex flex-col ">
            <TopBar withSearchBar={true}/>
            <div className=" flex justify-center">
                <div className="my-14 mx-3 border border-gray-100 p-2 w-11/12 h-fit rounded-sm flex  flex-col gap-2 ">
                    <div className=" flex items-center justify-between">
                        <button className="border-2 border-gray-100 p-1 md:text-base text-sm rounded bg-yellow-100 transition ease-in-out duration-150 hover:bg-yellow-200 w-fit">
                            <Link to='/add-client'>
                                <div className="font-monsterat font-semibold flex gap-1 items-center">
                                    <UserPlus size={20} /> Ajouter un client
                                </div>
                            </Link>
                        </button>
                        <button className="border-2 border-gray-50 md:text-base text-sm rounded bg-gray-200 p-1 text-blue-gray-900">
                            <div className="flex items-center gap-1 font-semibold font-monsterat">
                                <FilterIcon size={20}/> Filtrer
                            </div>
                        </button>
                    </div>
            
                    <div className="rounded-t border">
                        <Table>
                            <TableHeader>
                                <TableRow className=" hover:bg-gray-200 bg-gray-300 font-semibold">
                                    <TableHead className="font-semibold font-chivo">Nom</TableHead>
                                    <TableHead className="font-semibold font-chivo">Prénom</TableHead>
                                    <TableHead className="font-semibold font-chivo">Email</TableHead>
                                    <TableHead className="font-semibold font-chivo">Numero</TableHead>
                                    <TableHead className="font-semibold font-chivo">Adresse</TableHead>
                                    <TableHead className="font-semibold font-chivo">Edition</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {currentClient.map((item,index)=>(
                                    <TableRow key={index} className="font-monsterat cursor-pointer hover:bg-blue-gray-100">
                                        <TableCell>{item.nom}</TableCell>
                                        <TableCell>{item.prenom}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.numero}</TableCell>
                                        <TableCell>{item.adresse}</TableCell>
                                        <TableCell>
                                            <div className=" flex items-center gap-1">
                                                <PenIcon size={20} color="blue"/>
                                                <Trash2 size={20} color="red"/>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-end font-monsterat">
                        <div className=" flex justify-center items-center gap-3">
                            <button className={`flex items-center w-fit md:text-base text-sm bg-gray-200 p-1 hover:bg-gray-100 border-2 rounded 
                                hover:border-gray-200 ${currentPage === 1 && "cursor-not-allowed" } border-gray-300 transition ease-in-out duration-150`}
                                onClick={()=>{
                                    setCurrentPage(prevUsePage => prevUsePage - 1)
                                }}
                                disabled={currentPage === 1}
                                >
                                    <ChevronLeft size={19}/> Précédent
                            </button>
                            <div className=" md:text-base text-sm font-medium font-chivo">
                                Page {currentPage}
                            </div>
                            <button className={`flex items-center w-fit md:text-base text-sm bg-gray-200 p-1 hover:bg-gray-100 border-2 rounded 
                                hover:border-gray-200 ${currentPage === pageNumber && "cursor-not-allowed"} border-gray-300 transition ease-in-out duration-150`}
                                onClick={()=>{
                                    setCurrentPage(prevUsePage => prevUsePage + 1)
                                }}
                                disabled={currentPage === pageNumber}
                            >
                                Suivant <ChevronRight size={19}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientTable