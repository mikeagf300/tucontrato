// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const MotionH2 = motion("h2");

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      {/* Hero con imagen de fondo */}
      <section className="relative h-[500px] flex items-center justify-center text-center px-6">
        <Image
          src="/contratoFondo.png"
          alt="Firma de contrato"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl font-bold mb-4">TuContrato</h1>
          <p className="text-lg mb-6">
            Genera documentos legales personalizados en minutos. Gratis, rápido
            y sin complicaciones.
          </p>
          <Link href="/documentos">
            <Button className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
              Comenzar ahora
            </Button>
          </Link>
        </div>
      </section>

      {/* Beneficios */}
      <section className=" bg-gray-300 text-gray-900 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          ¿Por qué usar <span className="text-black">TuContrato</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-black text-white border border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Fácil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                Completa un formulario paso a paso y obtén tu documento listo.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black text-white border border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Gratis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                Accede a contratos básicos sin pagar.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black text-white border border-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Seguro</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                Tus datos no se almacenan ni se comparten.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gray-300 text-gray-900 px-6">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Documentos disponibles
        </MotionH2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            {
              title: "Contrato de Arrendamiento",
              desc: "Renta segura entre particulares.",
            },
            {
              title: "Carta de Responsiva",
              desc: "Protección ante terceros en cesión de bienes.",
            },
            {
              title: "Convenio de Pago",
              desc: "Formaliza deudas o acuerdos de pago.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-black text-white rounded-xl shadow-md border border-gray-800"
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-white px-6 text-gray-900">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Lo que dicen quienes lo usaron
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-sm">
            &quot;Pude hacer mi contrato de renta en 10 minutos, sin pagarle a
            nadie. Todo legal y claro.&quot;
            <br />
            <span className="block text-right mt-2 font-semibold text-blue-600">
              — Andrés M.
            </span>
          </blockquote>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-sm">
            &quot;Mi cliente firmó la carta responsiva digital que generé aquí,
            y me ahorré horas de redacción.&quot;
            <br />
            <span className="block text-right mt-2 font-semibold text-blue-600">
              — Laura G.
            </span>
          </blockquote>
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-white text-center px-6">
        <h2 className="text-2xl font-bold mb-4">Empieza ahora</h2>
        <p className="mb-6">
          Generar un documento es gratuito y toma menos de 5 minutos.
        </p>
        <Link href="/documentos">
          <Button className="text-lg px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-full">
            Crear mi primer contrato
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} TuContrato — Desarrollado por Miguel Gómez
      </footer>
    </main>
  );
}
