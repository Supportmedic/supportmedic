import React from "react";

function FormulairedeDemandedeConge() {
  return (
    <div className="flex justify-start items-center min-h-screen bg-gray-100 p-10 dark:bg-gray-800">
      <div className="w-full max-w-lg rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Formulaire de demande de congé
          </h3>
        </div>
        <form>
          <div className="p-6">

            <div className="mb-4">
              <label className="mb-2 block text-black dark:text-white">
                Département/Service
              </label>
              <select
                className="w-full h-11 rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              >
                <option value="">Sélectionnez votre département</option>
                <option value="RH">Ressources Humaines</option>
                <option value="IT">Technologie de l'information</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            {/* Détails du congé */}
            <div className="mb-4">
              <label className="mb-2 block text-black dark:text-white">
                Type de congé
              </label>
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="typeConge"
                    value="annuel"
                    className="h-5 w-5"
                  />
                  Congé annuel
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="typeConge"
                    value="maladie"
                    className="h-5 w-5"
                  />
                  Congé maladie
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="typeConge"
                    value="maternite"
                    className="h-5 w-5"
                  />
                  Congé maternité/paternité
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="typeConge"
                    value="sansSolde"
                    className="h-5 w-5"
                  />
                  Congé sans solde
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-black dark:text-white">
                Date de début
              </label>
              <input
                type="date"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-4 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-black dark:text-white">
                Date de fin
              </label>
              <input
                type="date"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-4 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-black dark:text-white">
                Motif du congé
              </label>
              <textarea
                placeholder="Expliquez brièvement le motif du congé"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-4 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              ></textarea>
            </div>

            {/* Validation */}
            <div className="mb-4">
              <label className="mb-2 block text-black dark:text-white">
                Documents justificatifs (si applicable)
              </label>
              <input
                type="file"
                className="block w-full text-black dark:text-white"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                Je confirme que les informations fournies sont exactes.
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded bg-primary py-3 font-medium text-white hover:bg-opacity-90"
            >
              Soumettre la demande
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormulairedeDemandedeConge;
