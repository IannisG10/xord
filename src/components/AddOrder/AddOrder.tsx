import React,{useState} from "react";
import { Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectTrigger,
        SelectValue
} from "../ui/select";
import { Home } from "lucide-react";
import { Link } from "react-router";

import DatePicker from "../DatePicker/DatePicker";

const AddOrder: React.FC = ()=>{
    const random_string = Math.random().toString(36).substring(2).toUpperCase()
    const order_number = "CMD-"+random_string

    const [cmdValue,setCmdValue] = useState<string>(order_number)
    const [newClient,setNewClient] = useState<boolean>(false)

    const handleCmdValue = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setCmdValue(e.target.value)
    }

    const handleNewClient = () =>{
        setNewClient(!newClient)
    }
    return(
        <div className=" flex flex-col m-5 w-1/2">
            <div className=" flex mt-2 justify-center items-center bg-gray-200 p-1 border-gray-300 rounded border-2 w-fit">
                <Link to="/">
                    <Home/>
                </Link>
            </div>
            <div className=" flex flex-col my-3 gap-1">
                <h1 className="font-bold font-monsterat text-3xl">Ajout d'une nouvelle commande</h1>
                <h2 className="text-xl">Ajout d'une commande qu'un client a passé</h2>
                <h5 className=" font-chivo text-gray-400 font-light text-sm">informations relatifs aux commandes des clients </h5>
            </div>
            <form action="" className=" mx-4">
                <div className=" flex flex-col gap-3 border border-gray-300 rounded-md p-5">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-sm font-semibold">Numéro de commande</label>
                            <input type="text" className="border w-full border-gray-200 rounded-md focus:border-black outline-none p-1"
                            placeholder="ex: CMD-RT46YRT9"
                            value={cmdValue}
                            onChange={handleCmdValue}
                            />

                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-sm font-semibold">Titulaire de la commande</label>
                            <input type="text" className="border w-full border-gray-200 rounded-md focus:border-black outline-none p-1"
                            placeholder="Vanessa"
                            />
                        </div>
                    </div>
                    <div className=" flex items-center gap-2">
                        <input type="checkbox" onChange={handleNewClient} />
                        <p className=" text-base font-chivo">Nouveau client ?</p>
                    </div>

                    {newClient && 
                        <div className=" flex flex-col border border-gray-é00 rounded p-5 gap-3">
                            <div className="flex items-center gap-2">
                                <div className="flex flex-col w-full ">
                                    <label htmlFor="" className="text-sm font-semibold">Nom</label>
                                    <input type="text"
                                        placeholder="ex: Rakoto"
                                        className="border border-gray-200 rounded-md focus:border-black outline-none p-1"
                                    />
                                </div>
                                <div className="flex flex-col w-full ">
                                    <label htmlFor="" className="text-sm font-semibold">Prenom</label>
                                    <input type="text"
                                        placeholder="ex: Francois"
                                        className="border border-gray-200 rounded-md focus:border-black outline-none p-1"
                                    />
                                </div>
                            </div>
                            <div className="flex  items-center  gap-2 w-full">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="" className="text-sm font-semibold">Email</label>
                                    <input type="text" 
                                    placeholder="Entrer une adresse email"
                                    className="border border-gray-200 w-full rounded-md focus:border-black outline-none p-1"
                                    />

                                </div>
                                <div className="flex flex-col ">
                                    <label className="text-sm font-semibold">Phone Number</label>
                                    <input type="text"  className="border border-gray-200 w-full rounded-md focus:border-black outline-none p-1" />
                                    
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <label htmlFor="" className="text-sm font-semibold">Province</label>
                                    <input type="text" 
                                        placeholder="ex: Toamasina" className="border border-gray-200 w-full rounded-md focus:border-black outline-none p-1" />
                                </div>
                                <div >
                                    <label htmlFor="" className="text-sm font-semibold">Code postal</label>
                                    <input type="text" 
                                        placeholder="501"
                                        className="border border-gray-200 w-full rounded-md focus:border-black outline-none p-1"
                                        />

                                </div>
                            </div>

                        </div>
                    }
                    
                    <div className="flex items-center gap-3" >
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-sm font-semibold">Nom du Produit</label>
                            <input type="text" className="border w-full border-gray-200 rounded-md focus:border-black outline-none p-1"
                            placeholder="Mailot Barcelone" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-sm font-semibold">Quantité</label>
                            <input type="number" className="border w-full border-gray-200 rounded-md focus:border-black outline-none p-1"
                             defaultValue={1}
                             />
                        </div>
                        
                    </div>
                    
                    <div className="flex flex-col relative z-10 w-full">
                        <label className="text-sm font-semibold" htmlFor="">Date de commande</label>
                        <DatePicker/>
                    </div>
                    <div  className="flex flex-col">
                        <label htmlFor="" className="text-sm font-semibold">Paiement </label>
                        <Select >
                            <SelectTrigger className="border w-full border-gray-200  rounded-md focus:border-black outline-none p-1">
                                <SelectValue placeholder="Règlement"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="acompte">Acompte reçuy</SelectItem>
                                    <SelectItem value="total"> Payé en totalité</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className=" flex items-center gap-1 font-medium font-chivo">
                        <input type="checkbox"  />
                        <p className=" text-sm">Modifier le montant de l'acompte</p>
                    </div>
                    <div className="flex justify-between items-center gap-5 w-full">
                        <button className=" bg-[#8fdc97] hover:bg-[#63da6f] transition-all w-1/4 
                                duration-200 ease-in-out rounded-md md:p-2 p-1 border-2 border-[#8fc794f5]"
                                type="submit"
                                >
                            Enregister
                        </button>
                        <button className="w-1/4 border-2 border-gray-200 rounded-md md:p-2 p-1 
                                hover:bg-gray-400 transition-all duration-200 bg-gray-300"
                                type="submit">
                            Réinitialiser
                        </button>
                    </div>

                </div>
            </form>
        
        </div>
    )
}

export default AddOrder