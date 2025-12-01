import API_BASE_URL from "../config/api";

export async function apiGet(path: string) {
  const response = await fetch(`${API_BASE_URL}${path}`);
  return response.json();
}