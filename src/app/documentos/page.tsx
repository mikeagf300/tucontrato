"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react"; // Icono sobrio

const documentos = [
  {
    nombre: "Contrato de Arrendamiento",
    descripcion: "Registra el acuerdo de renta entre dos partes.",
    slug: "arrendamiento",
  },
  {
    nombre: "Carta Responsiva",
    descripcion: "Protege legalmente la entrega de un bien o equipo.",
    slug: "responsiva",
  },
  {
    nombre: "Convenio de Pago",
    descripcion: "Formaliza un compromiso de pago entre particulares.",
    slug: "convenio-pago",
  },
];

export default function DocumentosPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">
          Genera tus documentos legales
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Selecciona el tipo de documento que deseas generar. Cada formato es
          editable y válido para uso legal.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {documentos.map((doc, i) => (
          <motion.div
            key={doc.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="border border-gray-200 p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow flex flex-col items-start gap-4"
          >
            <FileText className="text-black w-8 h-8" />
            <h2 className="text-xl font-semibold">{doc.nombre}</h2>
            <p className="text-sm text-gray-600 flex-grow">{doc.descripcion}</p>
            <Link href={`/documentos/${doc.slug}`} className="w-full mt-4">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Generar documento
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
