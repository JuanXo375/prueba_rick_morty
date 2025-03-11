
// Definir la interfaz de un episodio
export default interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[]; // Lista de URLs de los personajes en este episodio
    url: string;
    created: string;
    page?:number;
    }