import { API_URL } from "./api.js";

async function parseJsonResponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
  return data;
}

/** Checks whether an email can still be registered (true) or is already taken (false). */
export async function checkEmailAvailable(email) {
  const response = await fetch(
    `${API_URL}/auth/check-email?email=${encodeURIComponent(email)}`
  );
  const data = await parseJsonResponse(response);
  return data.available;
}

/** Creates a real SipNow account against the backend and returns { token, user }. */
export async function registerAccount({ name, email, password, phone }) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, phone }),
  });
  return parseJsonResponse(response);
}

/** Signs in against the backend and returns { token, user }. */
export async function loginAccount({ email, password }) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return parseJsonResponse(response);
}

/** Bearer-auth header for an authenticated backend request, or {} when logged out. */
export function authHeader(token) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}
