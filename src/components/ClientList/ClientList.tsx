import React from "react";
import { useAppSelector } from "@/redux/hook/hook";
import { HiPencil } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";
import { RxBorderDashed } from "react-icons/rx";

const ClientList: React.FC = () => {

    const { client } = useAppSelector(state => state.client)
    
    return(
        <div className="flex justify-center">
            
            <div className="w-11/12 max-h-72 overflow-y-auto ">
                <table className="w-full">
                    <thead className="font-monsterat text-sm border-b border-gray-400 bg-gray-300">
                        <tr className="w-full">
                            <th className="text-center p-1">Nom</th>
                            <th className="text-center p-1">Prenom</th>
                            <th className="text-center p-1">Contact</th>
                            <th className="text-center p-1">Date d'ajout</th>
                            <th className="text-center p-1">Adresse</th>
                            <th className="text-center p-1">Nombre d'achat</th>
                            <th className="text-center p-1">Edition</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200 font-chivo h-40 overflow-scroll">
                        {client.map((item,index) => (
                            <tr key={index} className="hover:bg-[#aab9c7] cursor-pointer">
                                <td className="text-center p-1" >{item.nom}</td>
                                <td className="text-center p-1" >{item.prenom}</td>
                                <td className="text-center p-1" >{item.phoneNumber}</td>
                                <td className="text-center p-1 flex justify-center" >
                                    <RxBorderDashed/>
                                </td>
                                <td className="text-center p-1">
                                    {item.adresse}
                                </td>
                                <td className="text-center p-1 ">
                                    <RxBorderDashed/>
                                </td>
                                <td className="text-center p-1 flex justify-center items-center gap-1">
                                    <HiPencil className="text-blue-600"/>
                                    <HiTrash className="text-red-600"/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClientList