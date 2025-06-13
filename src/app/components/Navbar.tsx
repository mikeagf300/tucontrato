/* eslint-disable @next/next/no-img-element */
// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Documentos", href: "/documentos" },
  { name: "Acerca de", href: "/#acerca" },
  { name: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="navbar-brand"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="/logo.jpeg"
            alt="Logo"
            style={{ height: "60px", marginRight: "30px" }}
          />
          <span>Tu Contrato</span>
        </div>
        <nav className="flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-gray-700 hover:text-black transition-colors",
                pathname === link.href && "text-black font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
