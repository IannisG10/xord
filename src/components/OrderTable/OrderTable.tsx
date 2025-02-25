import React from "react";
import { Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow
} from "../ui/table";
import SearchBar from "../SearchBar/SearchBar";
import { OrderData } from "@/data/OrderData";
import { Link } from "react-router";


const OrderTable: React.FC = () =>{
    return(
        <div className=" flex flex-col gap-2 w-full ">

            <div className=" flex flex-col gap-2 w-11/12 mx-5 border border-gray-100 rounded-sm p-2 ">
                <div className=" flex items-center justify-between w-full">
                    <SearchBar/>
                    <button className="font-monsterat md:w-1/6 md:text-lg text-base  p-1  font-semibold bg-gradient-to-r from-orange-100 to-green-100 transition-all hover:from-orange-200 
                    hover:to-green-300 duration-500 ease-in-out border-2 border-gray-100 rounded">
                        <Link to='/add-order'>
                            Nouvelle commande
                        </Link>

                    </button>
                </div>
                <div className=" rounded w-full border border-gray-100">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-300">
                                <TableHead className="font-semibold font-chivo" >Référence</TableHead>
                                <TableHead className="font-semibold font-chivo">Date</TableHead>
                                <TableHead className="font-semibold font-chivo">Client</TableHead>
                                <TableHead className="font-semibold font-chivo">Produit</TableHead>
                                <TableHead className="font-semibold font-chivo">Quantité</TableHead>
                                <TableHead className="font-semibold font-chivo">Statut</TableHead>
                                <TableHead className="font-semibold font-chivo">Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className=" w-full">
                            {OrderData.map((item,index)=>(
                                <TableRow key={index} className="font-monsterat cursor-pointer hover:bg-blue-gray-100" >
                                <TableCell>{item.ref}</TableCell>
                                <TableCell>{item.dateOrder}</TableCell>
                                <TableCell>{item.client}</TableCell>
                                <TableCell>{item.product}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell >
                                    <div className={` w-fit px-2 font-bold text-xs font-monsterat rounded-lg  bg-${item.color_status}-100 text-${item.color_status}-700  flex justify-center`}>
                                        {item.status}
                                    </div>
                                </TableCell>
                                <TableCell className=" font-semibold">{item.total}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default OrderTable