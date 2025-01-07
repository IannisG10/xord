import React from "react"
import { useForm,SubmitHandler } from "react-hook-form";
import PhoneInput from "@/components/PhoneInput/PhoneInput";
import "react-phone-number-input/style.css"
import axios from "axios";

interface ClientType {
    nom: string;
    prenom: string;
    email: string;
}

const Client: React.FC = () => {

    const { register,handleSubmit,resetField } = useForm<ClientType>()

    const onSubmit: SubmitHandler<ClientType> = (data)=>{
        axios.post('https://xord.onrender.com/client',data)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.error(error)
        })

        resetField("nom")
        
    }

    
    return(
            
                <div className="m-5 w-1/2 flex flex-col">
                    <div className="flex flex-col gap-1 my-3">
                            <h1 className="font-bold font-monsterat text-3xl">Clients</h1>
                            <h2 className="text-xl">Bienvenue sur la page d'ajout des nouveaux Clients</h2>
                            <h5 className="font-chivo text-gray-400 font-light text-sm">Entrer les informations sur le client</h5>
                    </div>
                    <form action="" className=" mx-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-3 border border-gray-200 rounded-md p-5">
                            <div className="flex items-center gap-5 w-full">
                                <div className="flex flex-col w-full ">
                                    <label className="text-sm font-semibold">Nom</label>
                                    <input type="text" 
                                            className="border w-full border-gray-200 rounded-md focus:border-black outline-none p-1"
                                            placeholder="ex: Rakoto"
                                            {...register("nom")}
                                    />
                                </div>
                                <div className="flex flex-col w-full ">
                                    <label className="text-sm font-semibold">Prenom</label>
                                    <input type="text" 
                                            className="border border-gray-200 rounded-md focus:border-black outline-none p-1"
                                            placeholder="ex: François"     
                                            {...register("prenom")}   
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-5 w-full">
                                <div className="flex flex-col w-full">
                                    <label className="text-sm font-semibold">Email</label>
                                    <input type="text"
                                            className="border border-gray-200 w-full rounded-md focus:border-black outline-none p-1"
                                            placeholder="Entrer une adresse email"
                                            {...register("email")}
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <label className="text-sm font-semibold">Phone Number</label>
                                    <PhoneInput/>
                                    
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm font-semibold">Adresse(Optionnel)</label>
                                <input type="text" placeholder="Ajouter une adresse"
                                        className="border border-gray-200 w-full rounded-md focus:border-black outline-none p-1"
                                />
                            </div>
                            <div className="flex items-center gap-5 w-full">
                                <div className="w-full">
                                    <label className="text-sm font-semibold">Province</label>
                                    <input type="text" 
                                    className="border border-gray-200 w-full rounded-md focus:border-black outline-none p-1"
                                        placeholder="ex: Toamasina"
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="text-sm font-semibold">Code postal</label>
                                    <input type="text" 
                                    className="border border-gray-200 w-full rounded-md focus:border-black outline-none p-1"
                                        placeholder="ex: 501"
                                    />
                                </div>
                                
                            </div>
                            <div className="flex items-center gap-5 w-full">
                                <button className="w-full bg-[#8fdc97] hover:bg-[#63da6f] transition-all 
                                        duration-200 ease-in-out rounded-md p-2 border-2 border-[#8fc794f5]"
                                        type='submit'
                                >
                                    Enregistrer
                                </button>
                                <button className="w-full border-2 border-gray-200 rounded-md p-2 hover:bg-gray-400 transition-all duration-200 bg-gray-300">Réinitialiser</button>
                            </div>
                        </div>
                    </form>
                </div>
    )
}

export default Client