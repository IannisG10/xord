import React from "react";

const ClientList: React.FC = () => {
    return(
        <div className="flex justify-center">
            
            <div className="w-full ">
                <table className="w-full">
                    <thead className="font-monsterat text-sm border-b border-gray-400 bg-gray-300">
                        <tr className="w-full">
                            <th className="text-center p-1">Nom</th>
                            <th className="text-center p-1">Prenom</th>
                            <th className="text-center p-1">Contact</th>
                            <th className="text-center p-1">Date d'ajout</th>
                            <th className="text-center p-1">Nombre d'achat</th>
                            <th className="text-center p-1">Supp & edit</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200 font-chivo">
                        <tr>
                            <td className="text-center p-1" >heg</td>
                            <td className="text-center p-1" >hsuh</td>
                            <td className="text-center p-1" >hdsj</td>
                            <td className="text-center p-1" >hdsj</td>
                            <td className="text-center p-1">hdsj</td>
                            <td className="text-center p-1">hddgsj</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClientList