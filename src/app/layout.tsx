// app/layout.tsx
"use client";
import "../styles/globals.css";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setShowPage(true);
  }, []);

  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        <Navbar />
        <AnimatePresence mode="wait">
          {showPage && (
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="pt-20" // ✅ Esto evita que el contenido quede detrás del navbar
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
