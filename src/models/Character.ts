export default interface Character {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown";
    species: string;
    type: string;
    gender: "Female" | "Male" | "Genderless" | "unknown";
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
    page?:number;
  }

export interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: Character[];
}