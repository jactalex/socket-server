// =======================
// Puerto de la aplicacion
// =======================
export const SERVER_PORT: number= Number( process.env.PORT) || 5001;

// =======================
// Vencimiento del token
// =======================
// Segundos
// Minutos
// Horas
// Dias
export const CADUCIDA_TOKEN = 60 * 60 * 24 * 8;

// ========================================
// Palabra secreto para verificar el token
// ========================================

export const SECRET:string = 'Nombre-Aplicacion-V1'