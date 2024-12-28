import React from 'react'
import { FaDownload } from "react-icons/fa";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import newRequest from '../utils/newRequest';


function AjouterUnEmploye() {

  const [error, setError] = useState(null)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [user, setUser] = useState(
    {

      username: "",
      subname: "",
      password: "",
      departement: "",
      img: "",
      role: "",
      Roledesc: "",
      isEmployee: false,
      isAdmin: false,
      isResidenceManager: false,

    }
  )

  const notify = (message: string) => {
    toast.error(message);
  };

  const navigate = useNavigate()

  const handlerChange = (e: any) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleRoleChange = (e: any) => {
    const selectedRole = e.target.value;

    setUser((prev) => ({
      ...prev,
      role: selectedRole, // Définit le rôle
      departement: getDescriptionForRole(selectedRole), // Définit le département correspondant
      isAdmin: selectedRole === "Administrateur",
      isEmployee: selectedRole === "Employé(e)",
      isResidenceManager: selectedRole === "Gestionnaire de residence",

      Roledesc: getDescriptionForRole(selectedRole),
    }));
  };

  const getDescriptionForRole = (role: string) => {
    switch (role) {
      case "Administrateur":
        return "Administration";
      case "Employé(e)":
        return "Employés support Medic";
      case "Gestionnaire de residence":
        return "Gestion des residences";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      await newRequest.post("/auth/register", {
        ...user,
      });

      navigate("/employees")

    } catch (err: any) {
      setError(err.response.data)
    }
  }

  function setPassword(value: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <div className="flex justify-start items-center min-h-screen bg-gray-100 p-10 dark:bg-gray-800">
        <div className="w-full lg:w-2/3 sm:w-full  rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6 dark:border-strokedark">
            <h3 className="font-medium text-3xl text-black dark:text-white">
              Enregistrer un nouvel employé
            </h3>
          </div>

          <form onSubmit={handleSubmit} >
            <div className="p-6">
              <div className="mb-4">
                <label className="mb-2 block text-black dark:text-white">
                  Nom de l'employé
                </label>
                <input
                  name='username'
                  onChange={handlerChange}
                  type="text"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-4 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-black dark:text-white">
                  Prénom de l'employé
                </label>
                <input
                  name='subname'
                  onChange={handlerChange}
                  type="text"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-4 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-black dark:text-white">
                  Département/Service
                </label>
                <select
                  name="departement" onChange={handleRoleChange}
                  className="w-full h-11 rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                >
                  <option selected>Sélectionnez un role</option>
                  <option value="Administrateur">Administrateur</option>
                  <option value="Employé(e)">Employé</option>
                  <option value="Gestionnaire de residence">Gestionnaire de residence</option>
                </select>
              </div>

              <div className='mb-2.5'>
                {/* Texte descriptif en fonction du rôle */}
                {user.Roledesc && (
                  <p style={{ marginTop: "10px", fontWeight: "bold" }}>{user.Roledesc}</p>
                )}
              </div>

              <div className="mb-6 mt-6">
                <label htmlFor="file-upload" className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Photo de l'employé
                </label>
                <div className="relative flex items-center justify-start w-full">
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                  />

                  <label
                    htmlFor="file-upload"
                    className="flex w-full max-w-lg cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-600 bg-green-600/20 py-6 px-4 text-center text-sm font-medium text-green-800 shadow-md transition hover:bg-green-600/30 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:border-green-500 dark:bg-green-700/10 dark:hover:bg-green-800/20 dark:text-green-300 dark:focus:ring-offset-gray-800"
                  >

                    <FaDownload size={30} />

                    <span className='mt-5'>Télécharger l'image de l'employé ici</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Tapez votre mot de passe
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => {
                      handlerChange(e); // Appel de la première fonction
                      setPassword(e.target.value); // Appel de la seconde fonction
                    }}

                    name='password'
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="7+ caractères et 1 Majuscule"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"  
                  />

                  <span className="absolute right-4 top-4" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                    {passwordVisible ? (
                      <IoEyeSharp size={27} />
                    ) : (
                      <FaRegEyeSlash size={27} />
                    )}
                  </span>
                </div>
              </div>

              <button
                onClick={() => notify}
                type="submit"
                className="w-full cursor-pointer rounded-lg border border-red-700  bg-red-700 p-4 text-white transition hover:bg-opacity-90"
              > {loading ? (
                <div className="flex items-center justify-center">
                  <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full border-t-transparent"></div>
                  <span className="ml-2">Connexion...</span>
                </div>
              ) : (
                "Enregistrer l'employé"
              )}

              </button>
              <p className='text-red-500 font-bold'>
                {error}
              </p>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AjouterUnEmploye

