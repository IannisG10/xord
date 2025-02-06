import React from "react";
import { Table,TableBody,TableCell,TableHeader,TableHead,TableRow } from "../ui/table";
import { PenIcon,Trash2,UserPlus,FilterIcon  } from "lucide-react";
import { Link } from "react-router";
import TopBar from "../TopBar/TopBar";
import Pagination from "../Pagination/Pagination";

const ClientData = [
    {
        nom: "GUERRA",
        prenom: "Iannis",
        email: "guerraiannis@gmail.com",
        numero: "0328580321",
        adresse: "Ambolonkandrina,Antananarivo"
    },
    {
        nom: "Damien",
        prenom: "Ryan",
        email: "damienR@gmail.com",
        numero: "0328377755",
        adresse: "La ClaireFontaine Tsiazotafo"
    },
    {
        nom: "Kevin",
        prenom: "Tang",
        email: "kevtang@gmail.com",
        numero: "0344502643",
        adresse: "Livraison kofimanga"
    },
    {
        nom: "Lucile",
        prenom: "Bako",
        email: "lucilebako@yahoo.com",
        numero: "0328051553",
        adresse: "Livraison Cotisse"
    }
]

const ClientTable: React.FC = () => {

    return(
        <div className="relative w-full flex flex-col ">
            <TopBar withSearchBar={true}/>
            <div className=" flex justify-center">
                <div className="my-20 mx-3 border border-gray-100 p-2 w-11/12 h-fit rounded-sm flex  flex-col gap-2 ">
                    <div className=" flex items-center justify-between">
                        <button className="border-2 border-gray-100 p-1 md:text-base text-sm rounded bg-yellow-100 w-fit">
                            <Link to='/add-client'>
                                <div className="font-monsterat font-semibold flex gap-1 items-center">
                                    <UserPlus size={20} /> Ajouter un client
                                </div>
                            </Link>
                        </button>
                        <button className="border-2 border-gray-100 md:text-base text-sm rounded bg-blue-gray-300 p-1 text-blue-gray-900">
                            <div className="flex items-center gap-1 font-semibold font-monsterat">
                                <FilterIcon size={20}/> Filtrer
                            </div>
                        </button>
                    </div>
            
                    <div className="rounded-t border">
                        <Table>
                            <TableHeader  >
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
                                {ClientData.map((item,index)=>(
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
                    <Pagination clientDatas={ClientData}/>
                </div>
            </div>
        </div>
    )
}

export default ClientTable