import React from "react"
import { useForm } from "react-hook-form";
import PhoneInput from "@/components/PhoneInput/PhoneInput";
import "react-phone-number-input/style.css"

const ClientForm: React.FC = () => {

    
    return(
        <div className="m-5 flex flex-col">
            <h1 className="font-bold font-monsterat text-3xl">Clients</h1>
            <h2 className="text-xl">Bienvenue sur la page d'ajout des nouveaux Clients</h2>
            <h5 className="font-chivo text-gray-400 font-light text-sm">Entrer les informations sur le client</h5>
            <form action="">
                <div className="flex flex-col  ">
                    <div className="flex items-center gap-5">
                        <div className="flex flex-col ">
                            <label className="text-sm font-semibold">Nom</label>
                            <input type="text" 
                                    className="border border-gray-200 rounded-md focus:border-black outline-none p-1"
                                    placeholder="ex: Rakoto"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="text-sm font-semibold">Prenom</label>
                            <input type="text" 
                                    className="border border-gray-200 rounded-md focus:border-black outline-none p-1"
                                    placeholder="ex: François"        
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex flex-col ">
                            <label className="text-sm font-semibold">Email</label>
                            <input type="text"
                                    className="border border-gray-200 rounded-md focus:border-black outline-none p-1"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="text-sm font-semibold">Phone Number</label>
                            <PhoneInput/>
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ClientForm