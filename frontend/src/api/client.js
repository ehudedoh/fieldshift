/**
 * Minimal HTTP client.
 * Secret keys must never be placed here.
 */

// Empty string = same origin and Vite proxy (/api → backend :8000).
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export function getApiBaseUrl() {
  return API_BASE_URL;
}

export async function fetchHealth() {
  const response = await fetch(`${API_BASE_URL}/api/health`);
  if (!response.ok) {
    throw new Error(`Health route responded with ${response.status}.`);
  }
  return response.json();
}
