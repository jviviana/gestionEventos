export interface Evento {
  id?: number;
  nombre: string;
  descripcion?: string;
  fecha_inicio: Date;
  fecha_fin: Date;
}

export interface CrearEventoDTO {
  nombre: string;
  descripcion?: string;
  fecha_inicio: string;
  fecha_fin: string;
}