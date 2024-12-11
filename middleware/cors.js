import cors from 'cors';
// Aceptar peticiones de otros dominios
const ACCEPTED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3030', 
  undefined
]

// Funcion para crear una forma de aceptar origenes de otros puertos y solucionar el CORS
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }
    
    console.error(`CORS error: Origin ${origin} not allowed`);
    return callback(new Error('Not allowed by Cors'));
  },
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
});