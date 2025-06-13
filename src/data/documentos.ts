export type CampoFormulario = {
  nombre: string;
  etiqueta: string;
  tipo: "text" | "number" | "date" | "textarea";
  requerido?: boolean;
};

export type DocumentoConfig = {
  titulo: string;
  campos: CampoFormulario[];
};

export const documentos: Record<string, DocumentoConfig> = {
  arrendamiento: {
    titulo: "Contrato de Arrendamiento",
    campos: [
      {
        nombre: "arrendador",
        etiqueta: "Nombre del arrendador",
        tipo: "text",
        requerido: true,
      },
      {
        nombre: "arrendatario",
        etiqueta: "Nombre del arrendatario",
        tipo: "text",
        requerido: true,
      },
      {
        nombre: "direccion",
        etiqueta: "Dirección del inmueble",
        tipo: "text",
        requerido: true,
      },
      {
        nombre: "renta",
        etiqueta: "Monto de la renta mensual",
        tipo: "number",
      },
      {
        nombre: "plazo",
        etiqueta: "Plazo del contrato (meses)",
        tipo: "number",
      },
      { nombre: "inicio", etiqueta: "Fecha de inicio", tipo: "date" },
      { nombre: "termino", etiqueta: "Fecha de término", tipo: "date" },
      { nombre: "pago", etiqueta: "Forma de pago", tipo: "text" },
      { nombre: "deposito", etiqueta: "Depósito en garantía", tipo: "text" },
      { nombre: "uso", etiqueta: "Uso del inmueble", tipo: "textarea" },
    ],
  },
  responsiva: {
    titulo: "Carta Responsiva",
    campos: [
      { nombre: "entregante", etiqueta: "Nombre del entregante", tipo: "text" },
      { nombre: "receptor", etiqueta: "Nombre del receptor", tipo: "text" },
      { nombre: "bien", etiqueta: "Descripción del bien", tipo: "textarea" },
      {
        nombre: "condiciones",
        etiqueta: "Condiciones del bien",
        tipo: "textarea",
      },
      { nombre: "fecha", etiqueta: "Fecha de entrega", tipo: "date" },
      { nombre: "lugar", etiqueta: "Lugar de entrega", tipo: "text" },
      { nombre: "uso", etiqueta: "Uso autorizado del bien", tipo: "textarea" },
    ],
  },
  "convenio-pago": {
    titulo: "Convenio de Pago",
    campos: [
      { nombre: "acreedor", etiqueta: "Nombre del acreedor", tipo: "text" },
      { nombre: "deudor", etiqueta: "Nombre del deudor", tipo: "text" },
      { nombre: "monto", etiqueta: "Monto total adeudado", tipo: "number" },
      { nombre: "pagos", etiqueta: "Número de pagos", tipo: "number" },
      { nombre: "monto_pago", etiqueta: "Monto por pago", tipo: "number" },
      { nombre: "fechas_pago", etiqueta: "Fechas de pago", tipo: "textarea" },
      { nombre: "metodo", etiqueta: "Método de pago", tipo: "text" },
      {
        nombre: "penalizacion",
        etiqueta: "Penalización por incumplimiento",
        tipo: "textarea",
      },
    ],
  },
};
