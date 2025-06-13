"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { documentos } from "@/data/documentos";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function DocumentoPage() {
  const { slug } = useParams();
  const doc = documentos[slug as keyof typeof documentos];
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [mostrarVistaPrevia, setMostrarVistaPrevia] = useState(false);
  const vistaPreviaRef = useRef<HTMLDivElement>(null);

  if (!doc) {
    return (
      <main className="min-h-screen pt-20 px-6 flex items-center justify-center">
        <p className="text-gray-500">Documento no encontrado.</p>
      </main>
    );
  }

  const handleChange = (nombre: string, valor: string) => {
    setFormData((prev) => ({ ...prev, [nombre]: valor }));
  };

  const handleSubmit = () => {
    // Mostrar vista previa
    setMostrarVistaPrevia(true);
  };

  const generarPDF = async () => {
    if (!vistaPreviaRef.current) return;

    const elemento = vistaPreviaRef.current;

    // Capturar la vista previa en canvas
    const canvas = await html2canvas(elemento, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      unit: "pt",
      format: "a4",
    });

    // Calcular ancho y alto para mantener la proporción en A4
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${doc.titulo}.pdf`);
  };

  // Aquí generamos el texto del documento combinando plantilla + formData
  // Por simplicidad, vamos a simular que cada campo se inserta en un párrafo.
  // En un proyecto real, sería mejor tener plantillas con placeholders.

  const renderDocumentoGenerado = () => {
    return (
      <div className="p-6 border border-gray-300 rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">{doc.titulo}</h2>
        {doc.campos.map((campo) => (
          <p key={campo.nombre} className="mb-2">
            <strong>{campo.etiqueta}:</strong>{" "}
            {formData[campo.nombre] || "(no especificado)"}
          </p>
        ))}
      </div>
    );
  };

  return (
    <main className="min-h-screen pt-24 px-6 max-w-3xl mx-auto">
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {doc.titulo}
      </motion.h1>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="space-y-6"
      >
        {doc.campos.map((campo) => (
          <div key={campo.nombre}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {campo.etiqueta}
            </label>

            {campo.tipo === "textarea" ? (
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                value={formData[campo.nombre] || ""}
                onChange={(e) => handleChange(campo.nombre, e.target.value)}
                required={campo.requerido}
              />
            ) : (
              <input
                type={campo.tipo}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                value={formData[campo.nombre] || ""}
                onChange={(e) => handleChange(campo.nombre, e.target.value)}
                required={campo.requerido}
              />
            )}
          </div>
        ))}

        <Button type="submit" className="bg-black text-white hover:bg-gray-800">
          Generar documento
        </Button>
      </motion.form>

      {mostrarVistaPrevia && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Vista previa del documento
          </h2>

          <div
            ref={vistaPreviaRef}
            className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm"
          >
            {renderDocumentoGenerado()}
          </div>

          <Button
            className="mt-6 bg-black text-white hover:bg-gray-800"
            onClick={generarPDF}
          >
            Descargar PDF
          </Button>
        </section>
      )}
    </main>
  );
}
