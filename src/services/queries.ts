import Character from "../models/Character";
import Episode from "../models/Episode";
import Location from "../models/Location";
import { cachedCharacter } from "../store/filtersCharacterReducer";
import { cachedEpisode } from "../store/filtersEpisodeReducer";
import { cachedLocation } from "../store/filtersLocationReducer";

const BASE_URL = "https://rickandmortyapi.com/api";

async function callAPI<T extends Character | Episode | Location>(
  idSection: "character" | "episode" | "location",
  currentPage:number,
  filters: any = {},
  dispatch: any
): Promise<{ data: T[]; additionalInformation?: any } | null> {
  if (!filters?.id) {
    const result = await fetchItems<T>(idSection, currentPage, filters as Partial<T>);
    if (result) {
      console.log("🚀 ~ result:", result)
      const { data, additionalInformation } = result;
      CachedInformation(data,additionalInformation,idSection,dispatch)
      return { data, additionalInformation };
    }
    return null;
  } else {
    const result = await fetchItem<T>(idSection, currentPage, filters as Partial<T>);
    if (result) {
      console.log("🚀 ~ result:", result)
      const { data, additionalInformation } = result;
      CachedInformation(data,additionalInformation,idSection,dispatch)
      return { data, additionalInformation };
    }
    return null;
  }
}

function CachedInformation(data:any[],info:Object,idSection: "character" | "episode" | "location",dispatch:any) {
  console.log("🚀 ~ CachedInformation ~ data:", data)
  if(idSection == "character"){
    dispatch(cachedCharacter({data,info}))
  }else if(idSection == "episode"){
    dispatch(cachedEpisode({data,info}))
  }else {
    dispatch(cachedLocation({data,info}))
  }
}

async function fetchItems<T extends Character | Location | Episode>(
  idSection: "character" | "location" | "episode",
  currentPage:number,
  filters: Partial<T> | null = {}
): Promise<{ data: T[]; additionalInformation?: any } | null> {
  const queryParams = new URLSearchParams();
  queryParams.append("page", currentPage.toString())
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (key !== "id" && value) {
        queryParams.append(key, value.toString());
      }
    });
  }

  const url = `${BASE_URL}/${idSection}?${queryParams}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { data: data.results as T[], additionalInformation: data.info };
  } catch (error) {
    console.error(`Error fetching ${idSection}:`, error);
    return null;
  }
}

async function fetchItem<T extends Character | Location | Episode>(
  idSection: "character" | "location" | "episode",
  currentPage:number,
  filters: Partial<T> | null = {}
): Promise<{ data: T[]; additionalInformation?: any } | null> {
  const queryParams = new URLSearchParams();
  queryParams.append("page", currentPage.toString())
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (key !== "id" && value) {
        queryParams.append(key, value.toString());
      }
    });
  }

  const url = `${BASE_URL}/${idSection}/${filters?.id ?? ""}?${queryParams}`;

  console.log("🚀 ~ url:", url)
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const processedData = await ProcessData<T>(data);
    return { data: processedData as T[], additionalInformation: null };
  } catch (error) {
    console.error(`Error fetching ${idSection}:`, error);
    return null;
  }
}

async function ProcessData<T extends Character | Location | Episode>(
  data:any) {
  if ("species" in data){
    return [data as T]
  }else if("dimension" in data) {
    if (data.residents && Array.isArray(data.residents) && data.residents.length > 0) {
      try {
        const characterPromises = data.residents.map(async (url: string) => {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`Error fetching resident: ${url}`);
          return response.json();
        });

        const characters = await Promise.all(characterPromises);
        return characters as Character[];
      } catch (error) {
        console.error("Error fetching characters:", error);
        return [] as T[];
      }
    }
  } else if ("air_date" in data){
    if (data.characters && Array.isArray(data.characters) && data.characters.length > 0) {
      try {
        const characterPromises = data.characters.map(async (url: string) => {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`Error fetching characters: ${url}`);
          return response.json();
        });

        const characters = await Promise.all(characterPromises);
        return characters as Character[];
      } catch (error) {
        console.error("Error fetching characters:", error);
        return [];
      }
    }
    return []; // Si no hay residentes, retorna un array vacío
  }
}


export { callAPI };
