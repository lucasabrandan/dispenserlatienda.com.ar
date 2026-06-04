// ============================================================
// Fuente de verdad central — toda la web lee de acá
// ============================================================

export const SITE = {
  name: "Dispenser La Tienda",
  url: "https://dispenserlatienda.com.ar",
  slogan: "Reparación y limpieza de dispensers a domicilio.",
  since: 2018,
  description:
    "Servicio técnico de dispensers de agua a domicilio en Capital Federal y Gran Buenos Aires. Reparación, limpieza y mantenimiento con garantía incluida.",
} as const;

// ---- Contacto ----
export const PHONE = {
  raw: "5491166082608",
  display: "+54 9 11 6608-2608",
  international: "+54-9-11-6608-2608",
} as const;

export const EMAIL = "info@dispenserlatienda.com.ar";

// ---- WhatsApp ----
const WA_BASE = `https://wa.me/${PHONE.raw}?text=`;

export const WA = {
  base: WA_BASE,
  number: PHONE.raw,
  /** Link sin mensaje pre-armado */
  plain: `https://wa.me/${PHONE.raw}`,

  // Mensajes con emoji de origen (el dueño los reconoce al instante)
  general:     WA_BASE + encodeURIComponent("Hola, vengo de la web. Tengo una consulta. 💬"),
  reparacion:  WA_BASE + encodeURIComponent("Hola, vengo de la web. Necesito reparar mi dispenser, les paso los datos y fotos del equipo. 🔧"),
  limpieza:    WA_BASE + encodeURIComponent("Hola, vengo de la web. Quiero consultar por limpieza y cambio de filtro. 🧹"),
  conversion:  WA_BASE + encodeURIComponent("Hola, vengo de la web. Quiero pasar mi dispenser de bidón a red de agua. 🔄"),
  alquiler:    WA_BASE + encodeURIComponent("Hola, vengo de la web. Quiero consultar por el alquiler de equipos para empresa. 🏢"),
  header:      WA_BASE + encodeURIComponent("Hola, vengo de la web. 📋"),
  hero:        WA_BASE + encodeURIComponent("Hola, vengo de la web. Quiero coordinar una visita técnica. 📋"),
} as const;

/** Genera link de WA con mensaje custom + emoji de origen */
export function waLink(msg: string, emoji: string): string {
  return WA_BASE + encodeURIComponent(`${msg} ${emoji}`);
}

// ---- Redes sociales ----
export const SOCIAL = {
  tiktok:    "https://www.tiktok.com/@dispenserlatienda",
  instagram: "https://www.instagram.com/dispenserlatienda/",
  google:    "https://share.google/DoOJd5YC6DhjIgZ2D",
} as const;

// ---- Cobertura (texto oficial unificado) ----
export const COBERTURA = {
  /** Texto corto para badges, eyebrows, footers — foco en Capital */
  short: "Capital Federal y GBA",
  /** Para el contexto de equipos/despacho */
  despacho: "Capital Federal y Gran Buenos Aires",
  /** Respuesta FAQ — incluye los tres niveles */
  faq: "Cubrimos toda Capital Federal y Gran Buenos Aires. También llegamos a Avellaneda, Lanús, Lomas de Zamora, Banfield, Temperley, Bernal y alrededores. Pasanos tu dirección y te confirmamos cobertura. Para empresas con varios equipos, ampliamos la zona de servicio — consultanos.",
  /** Badge amarillo para cualquier zona fuera de núcleo/céntrica */
  empresaRemota: "Consultanos por cobertura en tu zona. Para empresas con varios equipos, ampliamos el área de servicio.",
  /** Mención corporativa — para secciones de empresa */
  coberturaEmpresa: "Para empresas con múltiples equipos, la cobertura se amplía a todo el Gran Buenos Aires. Consultanos por tu zona.",
} as const;

// ---- Zonas estructuradas (para lógica del formulario) ----
// Lógica: si matchea núcleo o céntrica → sin badge.
// Todo lo demás → badge amarillo de empresa.
export const ZONAS = {
  /** Cobertura plena, sin condiciones */
  nucleo: [
    "CABA",
    // Barrios de CABA (todos núcleo)
    "Agronomía", "Almagro", "Balvanera", "Barracas", "Belgrano",
    "Boedo", "Caballito", "Chacarita", "Coghlan", "Colegiales",
    "Constitución", "Flores", "Floresta", "La Boca", "La Paternal",
    "Liniers", "Mataderos", "Monte Castro", "Montserrat", "Nueva Pompeya",
    "Núñez", "Palermo", "Parque Avellaneda", "Parque Chacabuco", "Parque Chas",
    "Parque Patricios", "Puerto Madero", "Recoleta", "Retiro", "Saavedra",
    "San Cristóbal", "San Nicolás", "San Telmo", "Vélez Sársfield", "Versalles",
    "Villa Crespo", "Villa del Parque", "Villa Devoto", "Villa General Mitre",
    "Villa Lugano", "Villa Luro", "Villa Ortúzar", "Villa Pueyrredón",
    "Villa Real", "Villa Riachuelo", "Villa Santa Rita", "Villa Soldati", "Villa Urquiza",
    // Zona sur GBA
    "Avellaneda", "Sarandí", "Villa Domínico", "Wilde", "Crucecita",
    "Lanús", "Lanús Este", "Lanús Oeste", "Remedios de Escalada", "Monte Chingolo", "Valentín Alsina", "Gerli",
    "Banfield", "Lomas de Zamora", "Temperley",
    "Don Bosco", "Bernal",
  ],
  /** Llegamos a zona céntrica, confirmar dirección */
  centrica: [
    "Turdera", "Llavallol", "Luis Guillón",
    "Monte Grande", "Ezeiza",
    "Quilmes", "San Francisco Solano",
    "Adrogué", "Burzaco", "Longchamps",
  ],
  /** Zona extendida — solo empresas con 3+ equipos */
  extendida: [
    "Morón", "Ramos Mejía", "San Justo", "Hurlingham", "Ituzaingó", "Caseros",
    "San Martín", "Vicente López", "San Isidro",
  ],
} as const;

// ---- Reputación ----
export const REVIEWS = {
  rating: 4.9,
  count: 42,
  platform: "Google",
} as const;

// ---- Analytics (preparados, inactivos hasta pegar IDs) ----
export const ANALYTICS = {
  /** Google Analytics 4 Measurement ID — dejar vacío hasta crear la propiedad */
  ga4Id: "",
  /** Meta Pixel ID — dejar vacío hasta crear la cuenta */
  metaPixelId: "",
  /** Google Search Console verification tag — dejar vacío hasta verificar */
  searchConsoleId: "",
} as const;

// ---- Google Sheets webhook (pegar URL del Apps Script deploy) ----
export const SHEETS_WEBHOOK = "";

// ---- Horarios ----
export const HORARIO = {
  schema: "Mo-Sa 09:00-18:00",
  display: "Lunes a sábado",
} as const;
