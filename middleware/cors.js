import cors from 'cors';

const ACCEPTED_ORIGINS = [
  'http://127.0.0.1:5500',
  'http://localhost:5500',
  'http://localhost:3000'
  
]

// Funcion para crear una forma de aceptar origenes de otros puertos y solucionar el CORS
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }
    if (!origin){
      return callback(null, true);
    }
    console.error(`CORS error: Origin ${origin} not allowed`);
    return callback(new Error('Not allowed by Cors'));
  },
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type']
});