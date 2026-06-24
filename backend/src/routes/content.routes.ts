import { Router } from 'express';
import { ContentController } from '../controllers/content.controller.js'; // <-- .js aqui

const contentRoutes = Router();
const contentController = new ContentController();

contentRoutes.get('/bolos', contentController.listarBolos);

export default contentRoutes;