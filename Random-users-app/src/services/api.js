const BASE_URL = "https://api.freeapi.app/api/v1";

export const fetchUsers = async (signal) => {
  const res = await fetch(`${BASE_URL}/public/randomusers`, {
    signal,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await res.json();

  
  return data.data.data; 
};