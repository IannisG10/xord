import React from "react"
import { useForm,SubmitHandler } from "react-hook-form";
import PhoneInput from "@/components/PhoneInput/PhoneInput";
import "react-phone-number-input/style.css"
import axios from "axios";
import { Toaster,toast } from "sonner";
import { Home } from "lucide-react";
import { Link } from "react-router";

export interface ClientType {
    nom: string;
    prenom: string;
    email: string;
    phoneNumber: string;
    adresse: string;
    province: string;
    cp: string
}

const Client: React.FC = () => {

    const { register,handleSubmit,reset,formState: {errors} } = useForm<ClientType>()

    const onSubmit: SubmitHandler<ClientType> = (data)=>{
        axios.post('https://xord.onrender.com/client',data)
        .then((response) => {
            const res = response.data.message
            toast.success(res)
        })
        .catch((error) => {
            console.error(error)
        })

        reset() 
    }

    return(
            
                <div className=" relative m-5 md:w-1/2 w-11/12 flex flex-col ">
                    <Toaster richColors />
                    <div className=" flex mt-2 justify-center items-center bg-gray-200 p-1 border-gray-300 rounded border-2 w-fit">
                        <Link to='/'>
                            <Home/>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1 my-3">
                            <h1 className="font-bold font-monsterat text-3xl">Clients</h1>
                            <h2 className="text-xl">Bienvenue sur la page d'ajout des nouveaux Clients</h2>
                            <h5 className="font-chivo text-gray-400 font-light text-sm">Entrer les informations sur le client</h5>
                    </div>
                   
                    <form action="" className=" mx-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-3 border border-gray-200 rounded-md p-5">
                            <div className="flex md:flex-row flex-col items-center md:gap-5 gap-2 w-full">
                                <div className="flex flex-col w-full ">
                                    <label className="text-sm font-semibold">Nom</label>
                                    <input type="text" 
                                            className="border w-full border-gray-200 rounded-md focus:border-black outline-none p-1"
                                            placeholder="ex: Rakoto"
                                            {...register("nom",{required: true})}
                                    />
                                    {errors.nom && <span className="text-xs
                                     text-red-500">Le nom est obligatoire</span>}
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

                            <div className="flex md:flex-row flex-col items-center md:gap-5 gap-2 w-full">
                                <div className="flex flex-col w-full">
                                    <label className="text-sm font-semibold">Email</label>
                                    <input type="text"
                                            className="border border-gray-200 w-full rounded-md focus:border-black outline-none p-1"
                                            placeholder="Entrer une adresse email"
                                            {...register("email",{required: true,pattern: {
                                                value: /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,}/,
                                                message: "Entrer une adresse email valide"
                                            }})}
                                    />
                                    {errors.email?.type === "required" && <span className="text-xs
                                     text-red-500" >Une adresse email valide est obligatoire</span>}
                                     {errors.email && <span  className="text-xs
                                     text-red-500">{errors.email.message}</span>}
                                </div>
                                <div className="flex flex-col ">
                                    <label className="text-sm font-semibold">Phone Number</label>
                                    <PhoneInput register={register} />
                                    
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm font-semibold">Adresse</label>
                                <input type="text" placeholder="Ajouter une adresse"
                                        className="border border-gray-200 w-full rounded-md focus:border-black 
                                        outline-none p-1"
                                        {...register("adresse",{required: true,maxLength: 40})}
                                />
                                {errors.adresse?.type === "required" && <span className="text-xs
                                     text-red-500">Veuillez saisir une adressse</span>}
                                {errors.adresse?.type === "maxLength" && <span className="text-xs
                                     text-red-400" >Adresse trop longue(40 caractères minimum)</span>}
                            </div>
                            <div className="flex items-center md:gap-5 gap-2 w-full">
                                <div className="w-full">
                                    <label className="text-sm font-semibold">Province</label>
                                    <input type="text" 
                                    className="border border-gray-200 w-full md:text-base text-sm rounded-md focus:border-black 
                                            outline-none p-1"
                                        placeholder="ex: Toamasina"
                                        {...register("province",{required: true})}
                                    />
                                    {errors.province && <span className="text-xs
                                     text-red-500">Entrer le nom d'une province</span>}
                                </div>
                                <div className="w-full">
                                    <label className="text-sm font-semibold">Code postal</label>
                                    <input type="text" 
                                    className="border border-gray-200 w-full rounded-md md:text-base text-sm focus:border-black outline-none p-1"
                                        placeholder="ex: 501"
                                        {...register("cp")}
                                    />
                                </div>
                                
                            </div>
                            <div className="flex items-center justify-between gap-5 w-full">
                                <button className=" md:w-3/4 w-1/3 bg-[#8fdc97] hover:bg-[#63da6f] transition-all 
                                        duration-200 ease-in-out rounded-md md:p-2 p-1 border-2 border-[#8fc794f5]"
                                        type='submit'
                                >
                                    Enregistrer
                                </button>
                                <button className=" md:w-3/4 w-1/3 border-2 border-gray-200 rounded-md md:p-2 p-1 
                                hover:bg-gray-400 transition-all duration-200 bg-gray-300"
                                        onClick={() => {reset()}}
                                >
                                    Réinitialiser
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
    )
}

export default Client