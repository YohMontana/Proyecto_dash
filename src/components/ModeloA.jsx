import React, { useState } from "react";
import { jsPDF } from "jspdf/dist/jspdf.umd.min.js";

const ModeloA = () => {
  const [universidad, setUniversidad] = useState("");

  const handleInputChange = (event) => {
    setUniversidad(event.target.value);
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
        `UNIVERSIDAD NACIONAL DE EDUCACIÓN  ${universidad}`,
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
      "Hoja de Envío N°: 1612-2023-R-UNE",
      doc.internal.pageSize.getWidth() / 2,
      58,
      { align: "center" }
    );

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("FECHA: 22 junio", 20, 70);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("N° DE FOLIOS: 03", 130, 70);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(
      "DOCUMENTO: OFICIO No 2001-2023-MINEDU/VMGI-DRELM-UGEL05-ARH.",
      20,
      80
    );

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("MPV-EPP-740-23.", 20, 85);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("REMITIDO POR: Área de Recursos Humanos - UGEL 05", 20, 95);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(
      "ASUNTO: Procedimiento de fiscalización posterior - Carmen Rosa Castillo Ojeda",
      20,
      105
    );

    //PASE A:
    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("PASE A:", 20, 115);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Vicerrectorado Académico", 20, 130);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Vicerrectorado de Investigación", 20, 135);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Secretaría General", 20, 140);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  DIGA", 20, 145);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Escuela de Posgrado", 20, 150);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(X)  Facultad de Ciencias Sociales y", 20, 155);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("Humanidades", 28, 160);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Dirección ______________________", 20, 165);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(   )  Oficina ________________________", 20, 170);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("Otro _________________________________", 20, 175);


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
        <form action="">
          <div>
          
            <label for="Hoja de Envío N°" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hoja de Envío N°</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
          </div>
          
        </form>




      <label className="mt-5" htmlFor="universidad">Nombre de la universidad:</label>
      <input
        type="text"
        id="universidad"
        value={universidad}                                                                                                                                                                                                                                              
        onChange={handleInputChange}
      />
      
      <button onClick={handleGeneratePDF}>Generar PDF A</button>
    </div>
    </>
  );
};

export default ModeloA;
