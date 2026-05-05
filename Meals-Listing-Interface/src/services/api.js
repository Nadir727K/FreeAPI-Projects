const BASE_URL = "https://api.freeapi.app/api/v1";

export const fetchMeals = async (signal) => {
  const res = await fetch(`${BASE_URL}/public/meals`, {
    signal,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch meals");
  }

  const data = await res.json();

  return data.data.data;
};