import React from "react";
import { Link } from "react-router";

const Signup: React.FC = () =>{
    return(
        <div className=" flex flex-col gap-3 bg-white border-2 border-gray-200 font-monsterat p-2 w-1/4 rounded-sm">
            <h3 className="text-2xl font-bold">Creer un compte</h3>
            <form action="" className="flex flex-col gap-3">
                <div className="flex flex-col justify-start">
                    <label htmlFor="">email</label>
                    <input type="text"
                            className="border-2 border-gray-200 rounded p-1 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col justify-start">
                    <label htmlFor="">Nom d'utilisateur</label>
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
                <div className="flex flex-col justify-start">
                    <label htmlFor="">Confirmer le mot de passe</label>
                    <input type="password"
                        className="border-2 border-gray-200 rounded p-1 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button className="bg-blue-700 border-2 p-1 border-blue-300 rounded font-semibold text-white">
                    Créer un compte
                </button>
                <hr className="w-full" />
                <span className="font-chivo text-sm">
                    <p className="text-gray-400">Avez-vous un compte?
                    <Link to='/login' className="text-blue-400"
                    >Connexion</Link></p>
                </span>
                <button className="bg-gray-200 border-2 p-1 border-gray-300 rounded font-semibold text-black">
                    S'inscrire avec google
                </button>
            </form>
        </div>
    )
}

export default Signup