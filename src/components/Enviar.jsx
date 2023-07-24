import React from "react";

const Enviar = () => {
  return (
    <div className="">
      <div>
        <form action="">
          <div className="mt-10 flex flex-row">
            <label
              for="countries"
              className="flex basis-1/4 place-items-center justify-end pr-10  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Centro de Costo:
            </label>
            <select
              id="countries"
              class="bg-gray-50 border w-[50%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            >
              <option selected>Elige un centro de costo</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="mt-10 flex flex-row">
            <label
              for="countries"
              className="flex basis-1/4 place-items-center justify-end pr-10  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Otro:
            </label>
            <select
              id="countries"
              class="bg-gray-50 border w-[50%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            >
              <option selected>En caso sea otro correo</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="mt-10 flex flex-row">
            <label
              for="helper-text"
              class="flex basis-1/4 place-items-center justify-end pr-10 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border w-[50%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="centro_costo@une.edu.pe"
            />
          </div>

          <div className="mt-10 flex flex-row">
            <label
              for="asunto"
              class="flex basis-1/4 place-items-center justify-end pr-10 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Asunto:
            </label>
            <input
              type="text"
              id="asunto"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Asunto"
              required
            />
          </div>
          <div className="mt-10 flex flex-row">
            <label
              for="message"
              class="flex basis-1/4 place-items-center justify-end pr-10  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contenido:
            </label>
            <textarea
              id="message"
              rows="8"
              class="block p-2.5 w-[50%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Escribe tu contenido aqui..."
            />
          </div>

          <div className="mt-10 flex flex-row">
            <label
              class="flex basis-1/4 place-items-center justify-end pr-10 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="multiple_files"
            >
              Adjuntar Archivos:
            </label>
            <input
              class="block w-[50%] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              multiple
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enviar;
