import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow
} from "../ui/table";

import { productData } from "@/data/productData";
import { ProductType } from "@/types/ProductType";
import { ChevronLeft,ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { Outlet } from "react-router";


const ProductTable: React.FC = () => {
    const [currentPage,setCurrentPage] = useState<number>(1)
    const itemPerPage: number = 5

    const pageNumber: number = Math.ceil(productData.length / itemPerPage)

    const LastProductIndex = currentPage * itemPerPage;
    const FirstProductIndex = LastProductIndex - itemPerPage

    const currentProdct: ProductType[] = productData.slice(FirstProductIndex,LastProductIndex)
    return(
        <div className=" flex flex-col gap-2 w-11/12 border border-gray-100 p-2 rounded">
            <div className=" flex items-center justify-between w-full">
                <SearchBar/>
                <button className=" font-monsterat w-1/6 text-lg p-1 hover:bg-gradient-to-l hover:from-blue-gray-200 font-semibold hover:to-red-50 transition 
                duration-500 ease-in-out border-2 border-gray-100 rounded bg-gradient-to-r from-blue-100 
                to-yellow-100">
                    <Link to='/add'>
                        Nouveau produit
                    </Link>
                </button>
            </div>
            <div className=" rounded w-full border border-gray-100">
                <Table>
                    <TableHeader>
                        <TableRow className="font-semibold"  >
                            <TableHead className="font-semibold font-chivo" >Nom</TableHead>
                            <TableHead className="font-semibold font-chivo" >Prix</TableHead>
                            <TableHead className="font-semibold font-chivo" >Catégorie</TableHead>
                            <TableHead className="font-semibold font-chivo" >Stock</TableHead>
                            <TableHead className="font-semibold font-chivo flex justify-center items-center"  >Nombre de commandes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            currentProdct.map((item,index) => (
                                <TableRow key={index} className="font-monsterat cursor-pointer hover:bg-blue-gray-100" >
                                    <TableCell >{item.productName}</TableCell>
                                    <TableCell >{item.price}</TableCell>
                                    <TableCell>
                                        <div className={` w-fit px-2 font-bold text-xs font-monsterat rounded-lg bg- text-${item.category_color}-700 flex justify-center`}>
                                            {item.category}
                                        </div>
                                    </TableCell>
                                    <TableCell>{item.stock}</TableCell>
                                    <TableCell className=" flex justify-center" >{item.order_number}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
            <div className="flex justify-end font-monsterat">
                <div className="flex items-center justify-center gap-3">
                    <button className={`flex items-center w-fit md:text-base text-sm bg-gray-200 p-1 hover:bg-gray-100 border-2 rounded 
                                hover:border-gray-200  border-gray-300 transition ease-in-out duration-150`}
                                onClick={() =>{
                                    setCurrentPage(prevUsePage => prevUsePage - 1)
                                }}
                                disabled={currentPage === 1}
                                >
                        <ChevronLeft size={19}/>Precedent
                    </button>
                    <div className=" md:text-base text-sm font-medium font-chivo">
                        Page {currentPage}
                    </div>
                    <button className={`flex items-center w-fit md:text-base text-sm bg-gray-200 p-1 hover:bg-gray-100 border-2 rounded 
                                hover:border-gray-200  border-gray-300 transition ease-in-out duration-150`}
                                onClick={() =>{
                                    setCurrentPage(prevUsePage => prevUsePage + 1)
                                }}
                                disabled={currentPage === pageNumber}
                                >
                        Suivant <ChevronRight size={19}/>
                    </button>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default ProductTable