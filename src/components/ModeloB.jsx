import React, { useState } from "react";
import { jsPDF } from "jspdf/dist/jspdf.umd.min.js";

const ModeloB = () => {
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
      doc.internal.pageSize.getWidth() / 2,20,{ align: "center" }
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
      doc.internal.pageSize.getWidth() / 2,30,{ align: "center" }
    );

    //Añadir imagen
    let imgData =
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Escudo_UNE.png";
    doc.addImage(imgData, "PNG", 102, 35, 8, 12, { align: "center" });

    doc.setFontSize(14);
    doc.setFont("times", "bold");
    doc.text("RECTORADO", doc.internal.pageSize.getWidth() / 2, 55, {align: "center"});

    //Añadir linea
    doc.setLineWidth(0.5);
    doc.line(50, 60, 155, 60);

    doc.setFontSize(14);
    doc.text(
      "HOJA DE TRÁMITE",
      doc.internal.pageSize.getWidth() / 2,90,{ align: "center" }
    );

    doc.setFontSize(14);
    doc.text(
      "CONSEJO UNIVERSITARIO",
      doc.internal.pageSize.getWidth() / 2,95,{ align: "center" }
    );


    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(
      "N°: 0506-2023-R-UNE",
      doc.internal.pageSize.getWidth() / 2,
      110,
      { align: "center" }
    );

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("FECHA: 16 junio", 20, 120);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("N° DE FOLIOS: 45", 130, 120);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(
      "DOCUMENTO: OFICIO N° 221-2023-VRI-UNE",
      20,
      130
    );

        doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("REMITIDO POR: Vicerrectorado de Investigación", 20, 140);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(
      "ASUNTO: Remito proyecto de Reglamento de la Editorial Universitaria",
      20,
      150
    );

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("PASE AL CONSEJO UNIVERSITARIO PARA SU TRATAMIENTO.", 20, 160);
    
    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("OBSERVACIONES:", 20, 170);

    doc.setLineWidth(0.5);
    doc.line(20, 175, 190, 175);

    // Guardar el PDF
    doc.save("ModeloB.pdf");
  };

  return (
    <div>
      <label htmlFor="universidad">Nombre de la universidad:</label>
      <input
        type="text"
        id="universidad"
        value={universidad}
        onChange={handleInputChange}
      />
      <button onClick={handleGeneratePDF}>Generar PDF B</button>
    </div>
  );
};

export default ModeloB;