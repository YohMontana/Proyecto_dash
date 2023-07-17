import React, { useState } from "react";
import { jsPDF } from "jspdf/dist/jspdf.umd.min.js";


  const ModeloA = () => {
    const [formValues, setFormValues] = useState({
      envio: '',
      fecha: '',
      folios:'',
      documento: '',
      remitido: '',
      asunto: '',
      viceacade: '',
      viceinve:'',
      secre:'',
      diga:'',
      posgrado:'',
      ciencias:'',
      direccion:'',
      direccion2:'',
      oficina:'',
      oficina2:'',
      otro:'',
      otro2:'',
      accion: '',
      conocimiento: '',
      informar: '',
      opinion: '',
      corresponderle: '',
      indicado: '',
      respuesta: '',
      resolucion: '',
      presupuestal: '',
      devolver: '',
      verobs: '',
      // Agrega aquí todos los inputs que necesites
    });
  
    const handleInputChange = (event) => {
      const { name, value, type, checked } = event.target;
      const inputValue = type === 'checkbox' ? checked : value;
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [name]: inputValue,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes realizar acciones con los valores del formulario
      
    };

  const handleGeneratePDF = () => {
    const doc = new jsPDF();

    // Crear instancia de jsPDF

    doc.addFont("times", "normal", "WinAnsiEncoding");
    // Definir el estilo de fuente
    doc.setFont("times", "bold");

    // Añadir titulo parte arriba
    doc.setFontSize(15);
    doc.text(
      `UNIVERSIDAD NACIONAL DE EDUCACIÓN`,
      doc.internal.pageSize.getWidth() / 2,
      20,
      { align: "center" }
    );

    doc.setFontSize(14);
    doc.text(
      "Enrique Guzmán y Valle",
      doc.internal.pageSize.getWidth() / 2,
      25,
      { align: "center" }
    );

    doc.setFontSize(14);
    doc.setFont("times", "bolditalic");
    doc.text(
      `"Alma Máter del Magisterio Nacional"`,
      doc.internal.pageSize.getWidth() / 2,
      30,
      { align: "center" }
    );

    doc.setFontSize(14);
    doc.setFont("times", "bold");
    doc.text("RECTORADO", doc.internal.pageSize.getWidth() / 2, 35, {
      align: "center",
    });
    //Añadir imagen
    let imgData =
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Escudo_UNE.png";
    doc.addImage(imgData, "PNG", 102, 36, 8, 12, { align: "center" });
    //Añadir linea
    doc.setLineWidth(0.5);
    doc.line(20, 50, 190, 50);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(
      `Hoja de Envío N°: ${formValues.envio}-2023-R-UNE`,
      doc.internal.pageSize.getWidth() / 2,
      58,
      { align: "center" }
    );

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`FECHA: ${formValues.fecha}`, 20, 70);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`N° DE FOLIOS: ${formValues.folios}`, 130, 70);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(
      `DOCUMENTO: ${formValues.documento}`,
      20,
      80
    );

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("MPV-EPP-740-23.", 20, 85);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`REMITIDO POR: ${formValues.remitido}`, 20, 95);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(
      `ASUNTO: ${formValues.asunto}`,
      20,
      105
    );

    //PASE A:
    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("PASE A:", 20, 115);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`${formValues.viceacade ? '(X)' : '(   )'}  Vicerrectorado Académico`, 20, 130);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`${formValues.viceinve ? '(X)' : '(   )'}  Vicerrectorado de Investigación`, 20, 135);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`${formValues.secre ? '(X)' : '(   )'}  Secretaría General`, 20, 140);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`${formValues.diga ? '(X)' : '(   )'}  DIGA`, 20, 145);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`${formValues.posgrado ? '(X)' : '(   )'}  Escuela de Posgrado`, 20, 150);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`${formValues.ciencias ? '(X)' : '(   )'}  Facultad de Ciencias Sociales y`, 20, 155);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("Humanidades", 28, 160);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`${formValues.direccion ? '(X)' : '(   )'}  Dirección    ${formValues.direccion2} `, 20, 165);

    doc.setLineWidth(0.3);
    doc.line(47, 166, 100, 166);  
    
    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`${formValues.oficina ? '(X)' : '(   )'}  Oficina   ${formValues.oficina2} `, 20, 170);

    doc.setLineWidth(0.3);
    doc.line(42, 171, 100, 171);    

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`${formValues.otro ? '(X)' : '(   )'}  Otro   ${formValues.otro2} `, 20, 175);

    doc.setLineWidth(0.3);
    doc.line(37, 176, 100, 176);  

    //PARA:
    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("PARA:", 110, 115);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(X)  Acción Necesaria", 110, 130);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(X)  Conocimiento", 110, 135);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Informar", 110, 140);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Opinión Legal", 110, 145);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Por corresponderle", 110, 150);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Según lo indicado", 110, 155);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Proyectar Respuesta", 110, 160);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Proyectar Resolución", 110, 165);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Previsión Presupuestal", 110, 170);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Devolver", 110, 175);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  VER OBSERVACIONES", 110, 180);

    //OBSERVACIONES
    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("OBSERVACIONES:", 15, 195);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("_________________________________________________", 15, 200);

    // Guardar el PDF
    doc.save("ModeloA.pdf");
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label
                for="Hoja de Envío N°"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Envío N°
              </label>
              <input
                type="number"
                id="envio"
                name="envio"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Hoja Envio"
                value={formValues.envio}
          onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                for="Fecha"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fecha
              </label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Fecha"
                value={formValues.fecha}
          onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                for="N° Folios"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Folios
              </label>
              <input
                type="number"
                id="folios"
                name="folios"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="N° Folios"
                value={formValues.folios}
          onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              for="documento"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Documento
            </label>
            <input
              type="text"
              id="documento"
              name="documento"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tipo de Documento"              
          value={formValues.documento}
          onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="remitido"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Remitido por
            </label>
            <input
              type="text"
              id="remitido"
              name="remitido"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre del Área"
              value={formValues.remitido}
          onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="asunto"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="asunto"
              value={formValues.asunto}
          onChange={handleInputChange}
              required
            />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                PASE A:
              </h3>
              <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="viceacade"
                      name="viceacade"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      value={formValues.viceacade}
                      onChange={handleInputChange}
                    />
                    <label
                      for="viceacade"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Vicerrectorado Académico
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="viceinve"
                      type="checkbox"
                      name="viceinve"
                      value={formValues.viceinve}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="viceinve"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Vicerrectorado de Investigación
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="secre"
                      name="secre"
                      type="checkbox"
                      value={formValues.secre}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="angular-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Secretaría General
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="diga"
                      name="diga"
                      type="checkbox"
                      value={formValues.diga}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      DIGA
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="posgrado"
                      name="posgrado"
                      type="checkbox"
                      value={formValues.posgrado}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Escuela de Posgrado
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="ciencias"
                      type="checkbox"
                      name="ciencias"
                      value={formValues.ciencias}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Facultad de Ciencias Sociales y Humanidades
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="direccion"
                      name="direccion"
                      type="checkbox"
                      value={formValues.direccion}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Dirección
                    </label>
                    <input
              type="text"
              id="dirección2"
              name="direccion2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre Dirección"
              value={formValues.direccion2}
                      onChange={handleInputChange}
              required
            />
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="oficina"
                      name="oficina"
                      type="checkbox"
                      value={formValues.oficina}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Oficina
                    </label>
                    <input
              type="text"
              id="oficina2"
              name="oficina2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre de Oficina"
              value={formValues.oficina2}
                      onChange={handleInputChange}
              required
            />
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="otro"
                      name="otro"
                      type="checkbox"
                      value={formValues.otro}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Otro
                    </label>
                    <input
              type="text"
              id="otro2"
              name="otro2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Otro"
              value={formValues.otro2}
                      onChange={handleInputChange}
              required
            />
                  </div>
                </li>
              </ul>

            </div>
            <div>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                PARA:
              </h3>
              <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="vue-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Acción Necesaria
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="react-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Conocimiento
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="angular-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="angular-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Informar
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Opinión Legal
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Por corresponderle
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Según lo indicado
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Proyectar Respuesta
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Proyectar Resolución
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Previsión Presupuestal
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Devolver
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      VER OBSERVACIONES
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-6">
            <label
              for="documento"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              OBSERVACIONES
            </label>
            <input
              type="text"
              id="documento"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Colocar alguna Observación"
              required
            />
          </div>
        </form>       
        <button type="button" onClick={handleGeneratePDF}>Generar PDF A</button>
      </div>
    </>
  );
};

export default ModeloA;
