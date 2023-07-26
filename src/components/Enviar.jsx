import React, { useState } from 'react';
import emailService from "../services/emailService";


const Enviar = () => {
  const [emailData, setEmailData] = useState({
    para: '',
    titulo: '',
    mensaje: '',
    fileAdjunto: [],
  });
console.log(emailData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('para', emailData.para);
      formData.append('titulo', emailData.titulo);
      formData.append('mensaje', emailData.mensaje);
  
      // Agregar archivos al formData
      for (let i = 0; i < emailData.fileAdjunto.length; i++) {
        formData.append('fileAdjunto', emailData.fileAdjunto[i]);
      }
  
      const response = await emailService.sendEmail(formData);
      console.log('Correo enviado:', response);
      // Lógica adicional después de enviar el correo, como mostrar una notificación de éxito, etc.
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      // Lógica adicional para manejar el error, como mostrar una notificación de error, etc.
    }
  };
  
console.log(Enviar)
  return (
    <div className="">
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="mt-10 flex flex-row">
            <label
              for="countries"
              className="flex basis-1/4 place-items-center justify-end pr-10  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Centro de Costo:
            </label>
            <select
              id=""
              name='centrocosto'
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
              id=""
              name='otro'
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
              value={emailData.para}
          onChange={(e) => setEmailData({ ...emailData, para: e.target.value })}
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
              value={emailData.titulo}
          onChange={(e) => setEmailData({ ...emailData, titulo: e.target.value })}

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
              value={emailData.mensaje}
          onChange={(e) => setEmailData({ ...emailData, mensaje: e.target.value })}
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
              name='fileAdjunto'
              type="file"
              multiple
              onChange={(e) => setEmailData({ ...emailData, fileAdjunto: e.target.files })}
            />
          </div>
          <button
          type="submit"
          
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Enviar Correo
        </button>
        </form>
      </div>
    </div>
  );
};

export default Enviar;
