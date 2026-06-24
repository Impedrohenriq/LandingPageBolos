import { Router } from 'express';
import contentRoutes from './content.routes.js'; // <-- .js aqui

const routes = Router();

routes.get('/health', (req, res) => {
  return res.json({ status: 'ok' });
});

// Montando a rota
routes.use('/content', contentRoutes); 

export default routes;