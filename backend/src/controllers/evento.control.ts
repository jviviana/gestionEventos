import { Request, Response } from 'express';
import { pool } from '../config/database';
import { CrearEventoDTO } from '../types/evento';

export class EventoController {
  static async getAll(req: Request, res: Response) {
    try {
      const result = await pool.query('SELECT * FROM eventos ORDER BY fecha_inicio DESC');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener eventos' });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { nombre, descripcion, fecha_inicio, fecha_fin }: CrearEventoDTO = req.body;

      if (!nombre || !fecha_inicio || !fecha_fin) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }

      const result = await pool.query(
        `INSERT INTO eventos (nombre, descripcion, fecha_inicio, fecha_fin) 
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [nombre, descripcion || null, fecha_inicio, fecha_fin]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear evento' });
    }
  }
}
