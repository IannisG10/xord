import React, { useState } from "react";
import { ChevronLeft,ChevronRight } from "lucide-react";
import type { ClientType } from "@/types/ClientType";

interface PropsPagination {
    clientDatas: ClientType[];
    
}

const Pagination: React.FC<PropsPagination> = ({clientDatas}) =>{
    const [currentPage,setCurrentPage] = useState<number>(1)
    const itemPerPage:number = 2

    const pageNumber: number = Math.ceil(clientDatas.length / itemPerPage)
    const LastClientIndex = currentPage * itemPerPage
    const FirstClientIndex = LastClientIndex - itemPerPage

    const Client: ClientType[] = clientDatas.slice(FirstClientIndex,LastClientIndex)

    
    return(
        <div className="flex justify-end font-monsterat">
            <div className=" flex items-center gap-3">
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
    )
}

export default Pagination