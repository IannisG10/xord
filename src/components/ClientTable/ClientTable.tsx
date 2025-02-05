import React from "react";
import { Table,TableBody,TableCell,TableHeader,TableHead,TableRow } from "../ui/table";
import { PenIcon,Trash2 } from "lucide-react";

const ClientTable: React.FC = () => {

    return(
        <div className="my-20 mx-3">
        
            <Table>
                <TableHeader >
                    <TableRow className=" hover:bg-gray-200">
                        <TableHead className="font-semibold font-chivo">Nom</TableHead>
                        <TableHead className="font-semibold font-chivo">Prénom</TableHead>
                        <TableHead className="font-semibold font-chivo">Email</TableHead>
                        <TableHead className="font-semibold font-chivo">Numero</TableHead>
                        <TableHead className="font-semibold font-chivo">Adresse</TableHead>
                        <TableHead className="font-semibold font-chivo">Edition</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="font-monsterat">
                    <TableRow className=" hover:bg-blue-gray-100 cursor-pointer">
                        <TableCell>GUERRA</TableCell>
                        <TableCell>Iannis</TableCell>
                        <TableCell>guerraiannis@gmail.com</TableCell>
                        <TableCell>0328580321</TableCell>
                        <TableCell>Ambolonkandrina,Antanarivo</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-1">
                                <PenIcon size={20}/>
                                <Trash2 size={20}/>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow className=" hover:bg-blue-gray-100 cursor-pointer">
                        <TableCell>Damien</TableCell>
                        <TableCell>Ryan</TableCell>
                        <TableCell>DamienR@gmail.com</TableCell>
                        <TableCell>0328377755</TableCell>
                        <TableCell>La ClaireFontaine Tsiazotafo</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-1">
                                <PenIcon size={20}/>
                                <Trash2 size={20}/>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default ClientTable