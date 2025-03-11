// Definir la interfaz de una ubicación
export default interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[]; // Lista de URLs de los personajes en esta ubicación
    url: string;
    created: string;
    page?:number;
    }
  