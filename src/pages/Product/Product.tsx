import React from "react";
import SideBar from "@/components/SideBar/SideBar";
import Inventory from "@/components/ProductInvotory/Inventory";
import ProductTable from "@/components/ProductTable/ProductTable";
import { useAppDispatch,useAppSelector } from "@/redux/hook/hook";
import { openMenu } from "@/redux/reducer/openReducer";

const Product: React.FC = () =>{

    const dispatch = useAppDispatch()

    const open = useAppSelector(state => state.open.open)
    return(

        <div className=" h-screen flex w-full relative">
           <SideBar/>
           {open && 
                <div className=" fixed z-10 inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm 
                transition-opacitya duration-300"
                    onClick={()=>{dispatch(openMenu())}}
                ></div>
            }
            <div className="w-full flex flex-col justify-center items-center">
                <Inventory/>
                <ProductTable/>
            </div>

        </div>
    )
}

export default Product