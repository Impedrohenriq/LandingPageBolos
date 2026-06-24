import { Request, Response } from 'express';
import { ContentService } from '../services/content.service.js'; // <-- .js aqui

const contentService = new ContentService();

export class ContentController {
  async listarBolos(req: Request, res: Response) {
    try {
      const bolos = await contentService.listarBolos();
      return res.json(bolos);
    } catch (error) {
      return res.status(500).json({ erro: "Falha ao buscar as criações do ateliê" });
    }
  }
}