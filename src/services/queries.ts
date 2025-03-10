const BASE_URL = "https://rickandmortyapi.com/api";

async function fetchCharacters(filters = {}) {
  const queryParams = new URLSearchParams(filters).toString();
  const url = `${BASE_URL}/character/?${queryParams}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data ;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return null;
  }
}


export { fetchCharacters };
