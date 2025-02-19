import React from "react";
import { Link } from "react-router";

const Login: React.FC = () =>{
    return(
        <div className=" h-screen flex justify-center items-center">
            <div className=" flex flex-col gap-3 bg-white border-2 border-gray-200 font-monsterat p-2 md:w-1/4 w-3/4 rounded-sm">
                <h3 className="text-2xl font-bold">Connexion</h3>
                <form action="" className="flex flex-col gap-3">
                    <div className="flex flex-col justify-start">
                        <label htmlFor="">email</label>
                        <input type="text"
                                className="border-2 border-gray-200 rounded p-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    
                    <div className="flex flex-col justify-start">
                        <label htmlFor="">Mot de passe</label>
                        <input type="password"
                            className="border-2 border-gray-200 rounded p-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    
                    <button className="bg-blue-700 border-2 p-1 border-blue-300 rounded font-semibold text-white">
                        Se connecter
                    </button>
                    <hr className="w-full" />
                    <span className="font-chivo text-sm">
                        <p className="text-gray-400">Aucun compte?
                        <Link to='/signup' className="text-blue-400"
                        >S'inscrire</Link></p>
                    </span>
                    <button className="bg-gray-200 border-2 p-1 border-gray-300 rounded font-semibold text-black">
                        Se connecter avec google
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login