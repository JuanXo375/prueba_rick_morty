const BASE_URL = "https://rickandmortyapi.com/api";

interface filter {
  name?: string;
  location?: string;
  episode?: string;
  page?: number;
}

async function fetchCharacters(filters: filter = {}) {
  console.log("🚀 ~ fetchCharacters ~ filters:", filters)
  let url_extension = "character"; // Default value
  if (filters.name) {
    url_extension = "character";
  } else if (filters.location) {
    url_extension = "location";
  } else if (filters.episode) {
    url_extension = "episode";
  }
  
  const queryParams = new URLSearchParams();
  if (filters.page) queryParams.append("page", filters.page.toString());
  if (filters.name) queryParams.append("name", filters.name);
  if (filters.location) queryParams.append("location", filters.location);
  if (filters.episode) queryParams.append("episode", filters.episode);
  console.log("🚀 ~ fetchCharacters ~ queryParams:", queryParams)


  const url = `${BASE_URL}/${url_extension}/?${queryParams}`;
  
  console.log("🚀 ~ fetchCharacters ~ url:", url)
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
