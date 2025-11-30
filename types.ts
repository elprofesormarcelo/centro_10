export enum AreaType {
  INFORMATICA = 'Informática',
  OFICIOS = 'Oficios',
  CONTABLE = 'Contable',
  ESTETICA = 'Estética',
  ARTISTICA = 'Artística',
  TEXTIL = 'Textil',
  IDIOMAS = 'Idiomas',
}

export interface Course {
  id: string;
  title: string;
  area: AreaType;
  content: string;
  requirements: string;
  duration: string;
  locations: string[]; // Descriptions of schedules/sedes
}

export interface Sede {
  name: string;
  address: string;
  contact: string;
  color: string;
}
