import express from 'express';
import cors from 'cors';
import eventoRoutes from './routes/eventoroutes';
import { initDB } from './config/database';

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('API de Eventos funcionando');
});

// las Rutas 
app.use('/api/eventos', eventoRoutes);

app.get('/api/health', (req, res) => {
  res.json({ estado: 'OK', mensaje: 'Servidor funcionando' });
});

initDB();

export default app;