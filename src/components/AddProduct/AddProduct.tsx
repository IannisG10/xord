import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router";


const AddProduct: React.FC = ()=>{
    return(
        <div className=" m-5 md:w-1/2 w-3/4 flex flex-col">
            <div className=" flex mt-2 justify-center items-center bg-gray-200 p-1 border-gray-300 rounded border-2 w-fit">
                    <Link to='/'>
                        <Home/>
                    </Link>
            </div>
            <div className="flex flex-col gap-1 my-3" >
                <h1 className="font-bold font-monsterat text-3xl">Ajout de nouveaux produits</h1>
                <h2 className="text-xl">Ajouter de nouveaux produits à votre catalogue</h2>
                <h5 className="font-chivo text-gray-400 font-light text-sm">Entrer les informations sur les produits </h5>
            </div>
            <form action="" className=" mx-4">
                <div className="flex flex-col gap-3 border border-gray-200 rounded-md p-5">
                    <div className="flex flex-col" >
                        <label className="text-sm font-semibold">Nom Produit</label>
                        <input type="text"  
                                className="border w-full border-gray-200 rounded-md focus:border-black outline-none p-1"
                                placeholder="coque Iphone"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-semibold">Description</label>
                        <textarea name="" id="" 
                        className="border w-full border-gray-200 rounded-md focus:border-black outline-none p-1"
                        placeholder="Stylé et resiste à tous les chocs "
                        ></textarea>
                    </div>
                    <div>
                            <label htmlFor="">Catégorie du produit</label>
                            {/* //Select element */}
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">Quantité</label>
                            <input type="number" 
                                    className="border w-full border-gray-200 rounded-md focus:border-black outline-none p-1" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">Référence</label>
                            <input type="text" 
                                    placeholder="ex:EVR24007B"
                                    className="border w-full border-gray-200 rounded-md focus:border-black outline-none p-1" />
                        </div>
                    </div>
                    <div className="flex items-center gap-5 w-full" >
                        <button className="w-full bg-[#8fdc97] hover:bg-[#63da6f] transition-all 
                                duration-200 ease-in-out rounded-md md:p-2 p-1 border-2 border-[#8fc794f5]"
                                type='submit'
                        >
                            Enregistrer
                        </button>
                        <button className="w-full border-2 border-gray-200 rounded-md md:p-2 p-1 
                                hover:bg-gray-400 transition-all duration-200 bg-gray-300"
                                type='submit'
                                >
                            Réinitialiser
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct