import React,{useState} from "react"
import { useForm,SubmitHandler } from "react-hook-form";
import PhoneInput from "@/components/PhoneInput/PhoneInput";
import "react-phone-number-input/style.css"
import { Checkbox } from "@/components/ui/checkbox";

interface ClientType {
    nom: string;
    prenom: string;
    email: string;
}

const ClientForm: React.FC = () => {

    const { register,handleSubmit } = useForm<ClientType>()

    const onSubmit: SubmitHandler<ClientType> = (data)=>{
        console.log(data)
    }

    const[isCheck,setIsCheck] = useState<boolean>(false)

    const handleCheck = () =>{
        setIsCheck(!isCheck)
    }
    return(
            <div className="flex flex-row justify-between  items-center h-full">
                <div className="m-5 flex flex-col">
                    <div className="flex flex-col gap-1 my-3">
                            <h1 className="font-bold font-monsterat text-3xl">Clients</h1>
                            <h2 className="text-xl">Bienvenue sur la page d'ajout des nouveaux Clients</h2>
                            <h5 className="font-chivo text-gray-400 font-light text-sm">Entrer les informations sur le client</h5>
                    </div>
                    <form action="" className="w-full mx-4">
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
                            <div className="flex items-center gap-1">
                                <Checkbox
                                    checked={isCheck}
                                    onCheckedChange={handleCheck}
                                />
                                <label className="font-chivo font-medium">Associer à une commande</label>
                            </div>
                            <div className="flex items-center gap-5 w-full">
                                <button className="w-full bg-[#8fdc97] hover:bg-[#63da6f] transition-all duration-200 ease-in-out rounded-md p-2 border-2 border-[#8fc794f5]">Enregistrer</button>
                                <button className="w-full border-2 border-gray-200 rounded-md p-2 hover:bg-gray-400 transition-all duration-200 bg-gray-300">Réinitialiser</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className=" h-full flex justify-center items-center flex-grow w-3/4  ">
                    <div className="w-3/4">
                        order form
                    </div>
                </div>
                
            </div>
    )
}

export default ClientForm