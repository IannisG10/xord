import React, { useEffect } from "react";
import { useAppDispatch,useAppSelector } from "@/redux/hook/hook";
import { fetchClient } from "@/redux/reducer/clientReducer";

const ResponsiveClientList: React.FC = () => {

    const dispatch = useAppDispatch();
    const client = useAppSelector(state => state.client.client)
    
    useEffect(()=>{
        dispatch(fetchClient())
    },[]);

    return(
        <>
            {client.map((item,index) => {
                 <div key={index}
                    className="border border-slate-700 flex flex-col rounded-md"
                 >
                    <span className="font-bold text-2xl">{item.nom}</span>
                    <span className="text-gray-300">{item.email}</span>
                 </div>
            })}
        </>
    )
}

export default ResponsiveClientList;